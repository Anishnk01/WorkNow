import { PrismaClient, UserRole, JobStatus } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Clear existing data
  await prisma.message.deleteMany();
  await prisma.rating.deleteMany();
  await prisma.job.deleteMany();
  await prisma.workerCategory.deleteMany();
  await prisma.workerProfile.deleteMany();
  await prisma.category.deleteMany();
  await prisma.user.deleteMany();

  // Create Categories
  console.log('📋 Creating categories...');
  const categories = await Promise.all([
    prisma.category.create({ data: { name: 'Plumbing', icon: '🔧' } }),
    prisma.category.create({ data: { name: 'Electrical', icon: '⚡' } }),
    prisma.category.create({ data: { name: 'Carpentry', icon: '🪵' } }),
    prisma.category.create({ data: { name: 'Cleaning', icon: '🧹' } }),
    prisma.category.create({ data: { name: 'Painting', icon: '🎨' } }),
    prisma.category.create({ data: { name: 'Gardening', icon: '🌱' } }),
    prisma.category.create({ data: { name: 'Moving', icon: '📦' } }),
    prisma.category.create({ data: { name: 'Tutoring', icon: '📚' } }),
    prisma.category.create({ data: { name: 'Pet Care', icon: '🐾' } }),
    prisma.category.create({ data: { name: 'Fitness Coaching', icon: '💪' } }),
  ]);

  // Create Admin User
  console.log('👤 Creating admin user...');
  const admin = await prisma.user.create({
    data: {
      fullName: 'Admin User',
      phone: '+1234567890',
      email: 'admin@worknow.com',
      role: UserRole.ADMIN,
      avatar: 'https://i.pravatar.cc/150?img=1',
    },
  });

  // Create Worker Users
  console.log('👷 Creating worker users...');
  const workers = await Promise.all([
    prisma.user.create({
      data: {
        fullName: 'John Plumber',
        phone: '+1111111111',
        email: 'john.plumber@worknow.com',
        role: UserRole.WORKER,
        avatar: 'https://i.pravatar.cc/150?img=2',
        workerProfile: {
          create: {
            bio: 'Professional plumber with 10 years experience',
            experience: '10 years',
            hourlyRate: 50,
            city: 'New York',
            available: true,
            rating: 4.8,
            totalReviews: 45,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Sarah Electrician',
        phone: '+1111111112',
        email: 'sarah.electrician@worknow.com',
        role: UserRole.WORKER,
        avatar: 'https://i.pravatar.cc/150?img=3',
        workerProfile: {
          create: {
            bio: 'Licensed electrician, residential & commercial',
            experience: '8 years',
            hourlyRate: 60,
            city: 'Los Angeles',
            available: true,
            rating: 4.9,
            totalReviews: 52,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Mike Carpenter',
        phone: '+1111111113',
        email: 'mike.carpenter@worknow.com',
        role: UserRole.WORKER,
        avatar: 'https://i.pravatar.cc/150?img=4',
        workerProfile: {
          create: {
            bio: 'Expert carpenter, furniture and renovations',
            experience: '12 years',
            hourlyRate: 55,
            city: 'Chicago',
            available: true,
            rating: 4.7,
            totalReviews: 38,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Emily Cleaner',
        phone: '+1111111114',
        email: 'emily.cleaner@worknow.com',
        role: UserRole.WORKER,
        avatar: 'https://i.pravatar.cc/150?img=5',
        workerProfile: {
          create: {
            bio: 'Professional cleaning services',
            experience: '6 years',
            hourlyRate: 35,
            city: 'Houston',
            available: true,
            rating: 4.9,
            totalReviews: 60,
          },
        },
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Alex Painter',
        phone: '+1111111115',
        email: 'alex.painter@worknow.com',
        role: UserRole.WORKER,
        avatar: 'https://i.pravatar.cc/150?img=6',
        workerProfile: {
          create: {
            bio: 'Interior and exterior painting specialist',
            experience: '9 years',
            hourlyRate: 45,
            city: 'Phoenix',
            available: true,
            rating: 4.6,
            totalReviews: 35,
          },
        },
      },
    }),
  ]);

  // Create Customer Users
  console.log('🛍️ Creating customer users...');
  const customers = await Promise.all([
    prisma.user.create({
      data: {
        fullName: 'Robert Johnson',
        phone: '+2111111111',
        email: 'robert.johnson@email.com',
        role: UserRole.CUSTOMER,
        avatar: 'https://i.pravatar.cc/150?img=10',
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Lisa Chen',
        phone: '+2111111112',
        email: 'lisa.chen@email.com',
        role: UserRole.CUSTOMER,
        avatar: 'https://i.pravatar.cc/150?img=11',
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'David Wilson',
        phone: '+2111111113',
        email: 'david.wilson@email.com',
        role: UserRole.CUSTOMER,
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Jennifer Brown',
        phone: '+2111111114',
        email: 'jennifer.brown@email.com',
        role: UserRole.CUSTOMER,
        avatar: 'https://i.pravatar.cc/150?img=13',
      },
    }),
    prisma.user.create({
      data: {
        fullName: 'Michael Davis',
        phone: '+2111111115',
        email: 'michael.davis@email.com',
        role: UserRole.CUSTOMER,
        avatar: 'https://i.pravatar.cc/150?img=14',
      },
    }),
  ]);

  // Associate workers with categories
  console.log('🔗 Associating workers with categories...');
  await prisma.workerCategory.createMany({
    data: [
      { workerId: workers[0].id, categoryId: categories[0].id }, // John - Plumbing
      { workerId: workers[1].id, categoryId: categories[1].id }, // Sarah - Electrical
      { workerId: workers[2].id, categoryId: categories[2].id }, // Mike - Carpentry
      { workerId: workers[3].id, categoryId: categories[3].id }, // Emily - Cleaning
      { workerId: workers[4].id, categoryId: categories[4].id }, // Alex - Painting
    ],
  });

  // Create Sample Jobs
  console.log('📝 Creating sample jobs...');
  const jobs = await Promise.all([
    prisma.job.create({
      data: {
        customerId: customers[0].id,
        workerId: workers[0].id,
        categoryId: categories[0].id,
        title: 'Fix leaky kitchen faucet',
        description: 'Kitchen faucet is dripping, needs repair or replacement',
        budget: 150,
        status: JobStatus.COMPLETED,
        address: '123 Main St, New York, NY',
        latitude: 40.7128,
        longitude: -74.006,
        scheduledDate: new Date('2026-06-25'),
      },
    }),
    prisma.job.create({
      data: {
        customerId: customers[1].id,
        workerId: workers[1].id,
        categoryId: categories[1].id,
        title: 'Install ceiling fan',
        description: 'Need to install a new ceiling fan in living room',
        budget: 200,
        status: JobStatus.IN_PROGRESS,
        address: '456 Oak Ave, Los Angeles, CA',
        latitude: 34.0522,
        longitude: -118.2437,
        scheduledDate: new Date('2026-06-22'),
      },
    }),
    prisma.job.create({
      data: {
        customerId: customers[2].id,
        workerId: workers[2].id,
        categoryId: categories[2].id,
        title: 'Build bookshelf',
        description: 'Custom bookshelf for home office',
        budget: 300,
        status: JobStatus.ACCEPTED,
        address: '789 Pine Rd, Chicago, IL',
        latitude: 41.8781,
        longitude: -87.6298,
        scheduledDate: new Date('2026-06-28'),
      },
    }),
    prisma.job.create({
      data: {
        customerId: customers[3].id,
        categoryId: categories[3].id,
        title: 'Deep house cleaning',
        description: 'Complete deep cleaning of 3-bedroom house',
        budget: 250,
        status: JobStatus.PENDING,
        address: '321 Elm St, Houston, TX',
        latitude: 29.7604,
        longitude: -95.3698,
        scheduledDate: new Date('2026-06-30'),
      },
    }),
    prisma.job.create({
      data: {
        customerId: customers[4].id,
        workerId: workers[4].id,
        categoryId: categories[4].id,
        title: 'Paint bedroom walls',
        description: 'Repaint bedroom with new color',
        budget: 200,
        status: JobStatus.COMPLETED,
        address: '654 Maple Dr, Phoenix, AZ',
        latitude: 33.4484,
        longitude: -112.074,
        scheduledDate: new Date('2026-06-20'),
      },
    }),
  ]);

  // Create Ratings
  console.log('⭐ Creating ratings...');
  await Promise.all([
    prisma.rating.create({
      data: {
        jobId: jobs[0].id,
        reviewerId: customers[0].id,
        receiverId: workers[0].id,
        stars: 5,
        review: 'John was professional and fixed the issue quickly!',
      },
    }),
    prisma.rating.create({
      data: {
        jobId: jobs[1].id,
        reviewerId: customers[1].id,
        receiverId: workers[1].id,
        stars: 5,
        review: 'Sarah did an excellent job installing the fan.',
      },
    }),
    prisma.rating.create({
      data: {
        jobId: jobs[4].id,
        reviewerId: customers[4].id,
        receiverId: workers[4].id,
        stars: 4,
        review: 'Good work, finished on time.',
      },
    }),
  ]);

  // Create Messages
  console.log('💬 Creating messages...');
  await Promise.all([
    prisma.message.create({
      data: {
        jobId: jobs[0].id,
        senderId: customers[0].id,
        message: 'Hi John, when can you come to fix the faucet?',
      },
    }),
    prisma.message.create({
      data: {
        jobId: jobs[0].id,
        senderId: workers[0].id,
        message: 'I can come tomorrow morning at 10 AM.',
      },
    }),
    prisma.message.create({
      data: {
        jobId: jobs[1].id,
        senderId: customers[1].id,
        message: 'Looking forward to the installation!',
      },
    }),
  ]);

  console.log('✅ Database seeded successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
