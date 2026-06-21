# WorkNow - Quick Start Guide

## Installation & Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Generate Prisma Client
```bash
npx prisma generate
```

### 3. Setup Environment Variables
```bash
cp .env.example .env.local
```

Add your configuration:
```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/worknow?schema=public"

# Supabase Authentication
NEXT_PUBLIC_SUPABASE_URL="https://your-project.supabase.co"
NEXT_PUBLIC_SUPABASE_ANON_KEY="your-anon-key"
SUPABASE_SERVICE_ROLE_KEY="your-service-role-key"

# Application
NODE_ENV="development"
NEXT_PUBLIC_API_URL="http://localhost:3000"
```

### 4. Database Setup

#### Option A: With PostgreSQL Running Locally
```bash
# Create database migrations
npm run db:migrate

# Seed with sample data
npm run db:seed
```

#### Option B: Using Supabase Database (Recommended)
1. Create a Supabase project at https://supabase.com
2. Copy your Database URL
3. Add it to `.env.local` as `DATABASE_URL`
4. Run migrations: `npm run db:migrate`
5. Seed database: `npm run db:seed`

### 5. Start Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Build for production
npm start                # Start production server
npm run lint             # Run ESLint

# Formatting
npm run format           # Format code with Prettier
npm run format:check     # Check formatting

# Database
npm run db:migrate       # Create and run migrations
npm run db:migrate:prod  # Deploy migrations (production)
npm run db:studio        # Open Prisma Studio (visual DB browser)
npm run db:seed          # Populate database with sample data
npm run db:reset         # Reset database (⚠️ destructive)
```

## Project Structure

```
Worknow/
├── src/
│   ├── app/                      # Next.js 15 App Router
│   │   ├── (auth)/
│   │   │   ├── login/
│   │   │   ├── register/
│   │   │   └── complete-profile/
│   │   ├── (public)/
│   │   │   ├── about/
│   │   │   ├── how-it-works/
│   │   │   ├── contact/
│   │   │   ├── privacy/
│   │   │   └── terms/
│   │   ├── (dashboard)/
│   │   │   ├── worker/
│   │   │   ├── customer/
│   │   │   └── admin/
│   │   ├── api/                  # API routes
│   │   ├── layout.tsx
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css
│   │   └── not-found.tsx
│   ├── components/
│   │   ├── auth/                 # Auth components
│   │   │   ├── LoginModal.tsx
│   │   │   ├── RegisterModal.tsx
│   │   │   ├── CompleteProfileForm.tsx
│   │   │   ├── RoleSelectionCard.tsx
│   │   │   └── WorkerProfileForm.tsx
│   │   ├── home/                 # Landing page sections
│   │   │   ├── HeroSection.tsx
│   │   │   ├── CategoriesSection.tsx
│   │   │   ├── HowItWorksSection.tsx
│   │   │   ���── FeaturesSection.tsx
│   │   │   ├── TestimonialsSection.tsx
│   │   │   ├── FAQSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── layout/
│   │       ├── Navbar.tsx
│   │       └── Footer.tsx
│   ├── hooks/                    # Custom React hooks
│   │   ├── useAuth.ts
│   │   ├── useRequireAuth.ts
│   │   └── useRoleProtection.ts
│   ├── lib/                      # Utilities
│   │   ├── supabase.ts          # Supabase client
│   │   └── prisma.ts            # Prisma client
│   ├── store/                    # State management
│   │   └── authStore.ts         # Zustand auth store
│   ├── types/                    # TypeScript types
│   │   └── auth.ts
│   └── middleware.ts             # NextAuth middleware
├── prisma/
│   ├── schema.prisma             # Database schema
│   ├── seed.ts                   # Seeding script
│   └── migrations/               # Database migrations
├── public/                        # Static assets
├── .env.example                  # Environment template
├── .eslintrc.json
├── .prettierrc
├── tsconfig.json
├── tailwind.config.ts
├── next.config.js
└── package.json
```

## Troubleshooting

### "Cannot find module '@/...'" Errors
```bash
# Clean and reinstall
rm -rf node_modules .next
npm install
npx prisma generate
```

### Supabase Connection Issues
```bash
# Verify environment variables in .env.local
echo $NEXT_PUBLIC_SUPABASE_URL
echo $NEXT_PUBLIC_SUPABASE_ANON_KEY
```

### Database Connection Issues
```bash
# Test PostgreSQL connection
psql "postgresql://user:password@localhost:5432/worknow"

# Or use Supabase's connection string
```

### Port Already in Use
```bash
# Use custom port
npm run dev -- -p 3001
```

### Prisma Client Issues
```bash
# Regenerate Prisma client
npx prisma generate

# Or reset completely
rm -rf node_modules/.prisma
npm install
```

## Features

✅ **Authentication**
- Google OAuth
- Phone OTP
- Email/Password
- Supabase Auth

✅ **Authorization**
- Role-based access control
- Middleware protection
- Route guards

✅ **Landing Pages**
- Home page with hero
- About, How It Works, Contact
- Privacy Policy, Terms & Conditions
- Responsive design

✅ **Database**
- PostgreSQL with Prisma ORM
- User, Worker, Customer, Admin roles
- Jobs, Ratings, Messages, Categories

✅ **UI Components**
- Modals for auth
- Profile completion forms
- Responsive navbar & footer
- Section components

## Architecture

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma ORM
- **Authentication**: Supabase Auth
- **State**: Zustand
- **Validation**: Zod

## Security Features

✅ Middleware route protection
✅ Supabase authentication
✅ Environment variable encryption
✅ Secure password handling
✅ CORS protection
✅ Input validation

## Next Steps

1. Complete Supabase setup
2. Configure environment variables
3. Run database migrations
4. Start development server
5. Test authentication flow
6. Build dashboard pages
7. Implement job posting

## Support

For issues or questions:
- Check the [GitHub Issues](https://github.com/Anishnk01/WorkNow/issues)
- Contact: support@worknow.com

---

**Happy coding! 🚀**
