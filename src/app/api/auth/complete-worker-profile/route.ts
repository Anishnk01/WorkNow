import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { prisma } from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const {
      data: { user: authUser },
    } = await supabase.auth.getUser();

    if (!authUser) {
      return NextResponse.json(
        { error: 'Unauthorized' },
        { status: 401 }
      );
    }

    const body = await request.json();
    const { bio, experience, hourlyRate, categories } = body;

    if (!bio || !experience || !hourlyRate || !categories || categories.length === 0) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Get user
    const user = await prisma.user.findUnique({
      where: { email: authUser.email! },
    });

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    // Get or create worker profile
    const workerProfile = await prisma.workerProfile.upsert({
      where: { userId: user.id },
      update: {
        bio,
        experience,
        hourlyRate,
      },
      create: {
        userId: user.id,
        bio,
        experience,
        hourlyRate,
        city: user.id, // Will be updated separately
        available: true,
        rating: 0,
        totalReviews: 0,
      },
    });

    // Get category IDs
    const categoryRecords = await prisma.category.findMany({
      where: {
        name: {
          in: categories,
        },
      },
    });

    // Delete existing worker categories
    await prisma.workerCategory.deleteMany({
      where: { workerId: workerProfile.id },
    });

    // Create new worker categories
    await prisma.workerCategory.createMany({
      data: categoryRecords.map((cat) => ({
        workerId: workerProfile.id,
        categoryId: cat.id,
      })),
    });

    return NextResponse.json(
      { success: true, message: 'Worker profile completed' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Complete worker profile error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
