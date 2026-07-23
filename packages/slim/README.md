# EVE Incursions Slim

This is the simplified self-hosted version of the app. It keeps the useful EVE-specific logic, but removes the old GraphQL API service, Redis cache, WebSocket service, and Docker-only networking assumptions.

## What Runs Here

- Next.js app on port `4004`
- SQLite app database by default, or Supabase/Postgres when `DB_MODE=supabase`
- ESI sync commands inside `src/sync`
- Scheduler for recurring ESI updates

## First Local Start

Run these commands from the repository root:

```powershell
npm install
npm run slim:sync
npm run slim:rats
npm run slim:dev
```

Open:

```text
http://localhost:4004
```

## Production Build

```powershell
npm run slim:build
npm --workspace slim run start
```

The production server also defaults to port `4004`.

## Database Mode

Choose the backend with environment variables:

```env
DB_MODE=local
DB_FILE=data/app.db
```

or:

```env
DB_MODE=supabase
DATABASE_URL=postgresql://...
DATABASE_SSL=true
```

When `DB_MODE=supabase`, the app uses a Postgres database and can be deployed on Vercel with a persistent external database.

## Sync Commands

```powershell
npm run slim:sync       # import static seed data, update spawns, update sovereignty
npm run slim:rats       # import Sansha rat data
npm run slim:scheduler  # keep spawn/influence/sovereignty data updated
```

The scheduler should run as a second long-running process next to the Next.js app.

## Suggested Server Layout

Run two processes:

```powershell
npm --workspace slim run start
npm --workspace slim run scheduler
```

For Linux hosting, run those through `systemd`, `pm2`, or another process manager. Docker is no longer required for the slim version.

## Notes

- The SQLite database file is intentionally gitignored.
- The initial static universe import comes from `seed/eve-incursions-seed.sql.gz`.
- Live browser push updates are intentionally not part of this version; users see updates after a refresh or normal page navigation.
