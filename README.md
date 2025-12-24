# Hono + MySQL Starter

Minimal backend boilerplate that pairs [Hono](https://hono.dev/) with a MySQL database managed through Drizzle ORM.

- **Runtime entry**: `src/index.ts` bootstraps the server and loads `src/app.ts`, where all routers and middleware are wired.
- **Task routes**: `src/routes/tasks/` contains CRUD handlers showing how to work with MySQL through Drizzle.

## Getting Started

```bash
cp .env.example .env    # fill in DATABASE_* variables
pnpm install
pnpm dev
```

Visit <http://localhost:3000> once the server is up. OpenAPI docs are exposed at <http://localhost:3000/references>.

## Common Commands

```bash
pnpm lint        # ESLint
pnpm test        # Vitest
pnpm build       # TypeScript -> dist
pnpm db:push     # Apply schema changes via drizzle-kit
pnpm db:studio   # Launch Drizzle Studio UI
```

The project is ready to be reused as a template or deployed after configuring your MySQL credentials.
