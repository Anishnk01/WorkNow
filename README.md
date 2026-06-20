# WorkNow - A Working Platform

A modern job/service marketplace platform connecting customers with skilled workers.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL with Prisma ORM
- **Code Quality**: ESLint & Prettier

## 📋 Prerequisites

- Node.js 18+
- PostgreSQL 13+
- npm or yarn

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Anishnk01/WorkNow.git
   cd WorkNow
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Setup environment variables**
   ```bash
   cp .env.example .env.local
   ```
   Update `DATABASE_URL` with your PostgreSQL connection string:
   ```
   postgresql://user:password@localhost:5432/worknow?schema=public
   ```

4. **Create database and run migrations**
   ```bash
   npm run db:migrate
   ```

5. **Seed the database**
   ```bash
   npm run db:seed
   ```

6. **Start development server**
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start            # Start production server

# Linting & Formatting
npm run lint         # Run ESLint
npm run format       # Format code with Prettier
npm run format:check # Check formatting

# Database
npm run db:migrate   # Create and run migrations
npm run db:migrate:prod  # Deploy migrations to production
npm run db:studio    # Open Prisma Studio (visual DB browser)
npm run db:seed      # Seed database with sample data
npm run db:reset     # Reset database (⚠️ destructive)
```

## 📊 Database Schema

The project includes the following models:

- **User**: Customer, Worker, and Admin users
- **WorkerProfile**: Extended profile for workers
- **Category**: Service categories (Plumbing, Electrical, etc.)
- **WorkerCategory**: Many-to-many relationship between workers and categories
- **Job**: Job listings with status tracking
- **Rating**: Reviews and ratings for completed jobs
- **Message**: Communication between users on jobs

### Enums

**UserRole**:
- CUSTOMER
- WORKER
- ADMIN

**JobStatus**:
- PENDING
- ACCEPTED
- IN_PROGRESS
- COMPLETED
- CANCELLED

## 📁 Project Structure

```
WorkNow/
├── src/
│   ├── app/              # Next.js app router
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── lib/
│       └── prisma.ts     # Prisma client singleton
├── prisma/
│   ├── schema.prisma     # Database schema
│   └── seed.ts           # Seed script
├── public/               # Static files
├── .env.example          # Environment variables template
├── .eslintrc.json        # ESLint config
├── .prettierrc            # Prettier config
├── tsconfig.json         # TypeScript config
├── tailwind.config.ts    # Tailwind CSS config
├── next.config.js        # Next.js config
└── package.json          # Dependencies
```

## 🌱 Seed Data

The database is pre-populated with:

- **1 Admin** account
- **5 Workers** with profiles and ratings
- **5 Customers**
- **10 Service Categories**
- **5 Sample Jobs** with various statuses
- **Sample Ratings** and **Messages**

## 🔐 Environment Variables

```env
# Database Connection
DATABASE_URL=postgresql://user:password@localhost:5432/worknow?schema=public

# Environment
NODE_ENV=development
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## 📝 Development Guidelines

1. **Code Style**: Follow ESLint and Prettier rules
   ```bash
   npm run format  # Auto-format code
   npm run lint    # Check for lint errors
   ```

2. **Database Changes**:
   - Update `prisma/schema.prisma`
   - Create migration: `npm run db:migrate`
   - Test before pushing

3. **TypeScript**: Ensure type safety
   - No `any` types
   - Proper error handling

## 🚨 Troubleshooting

### Database Connection Issues
```bash
# Check PostgreSQL is running
psql -U postgres

# Verify DATABASE_URL in .env.local
# Format: postgresql://user:password@host:port/database?schema=public
```

### Prisma Migration Issues
```bash
# Reset database (WARNING: deletes all data)
npm run db:reset

# Recreate Prisma client
rm -rf node_modules/.prisma
npm install
```

### Port Already in Use
```bash
# Use custom port
npm run dev -- -p 3001
```

## 📚 Useful Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Prisma Documentation](https://www.prisma.io/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)

## 📄 License

MIT License - feel free to use this project for learning and commercial purposes.

---

**Status**: ✅ Backend setup complete. Ready for UI development!
