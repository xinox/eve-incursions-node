# Supabase Migration Checklist

This app uses Supabase as a managed Postgres database. The main production target is `packages/slim` on Vercel.

## Production Runtime

- Use `DB_MODE=supabase` on Vercel.
- Use the Supabase transaction pooler for `DATABASE_URL`.
- The transaction pooler uses port `6543`.
- Use `DATABASE_SSL=require`.
- Keep `DATABASE_POOL_MAX=1` for Vercel serverless functions.
- Keep `DB_SYNCHRONIZE=false` in production after the schema exists.

## Local Runtime

- Use `DB_MODE=local` for the sql.js database.
- Use `DB_FILE=data/app.db` unless a different local file is needed.
- Local mode defaults to schema synchronization.

## Sync And Scheduler

- Run sync jobs from `packages/slim`, not `packages/server`.
- For a fresh Supabase schema, temporarily run with `DB_SYNCHRONIZE=true` during the first sync.
- Turn `DB_SYNCHRONIZE=false` again after the schema has been created.
- The scheduler should use the same Supabase transaction pooler settings as production.

## SQL Compatibility Rules

- Boolean columns must use `true` and `false`, not `1` and `0`.
- CamelCase database columns must be quoted in raw SQL, for example `"regionID"`.
- Avoid Postgres-only casts such as `value::numeric` in SQL shared with local sql.js.
- Prefer simple comparisons over database-specific functions when the same logic can run in both Postgres and sql.js.
- Keep raw SQL concentrated in `src/lib/db.ts` so production bugs are easier to audit.

## Vercel And Supabase Risks

- Vercel can start multiple serverless instances, so every instance must keep its database pool small.
- The direct Supabase database host may require IPv6, so Vercel should use the pooler host.
- Session pooler mode can run out of clients quickly under serverless traffic.
- Transaction pooler mode is the safer default for the website.

## Supabase Advisor Findings

- Security advisor reports RLS disabled on public tables.
- The website reads through the server-side Postgres connection, so enabling RLS should not break the deployed app.
- If the Supabase Data API is used later, add explicit read policies before exposing tables.
- Performance advisor reports unindexed foreign keys on `mapconstellations`, `solar_systems`, `spawn_influence_logs`, `spawn_logs`, and `spawns`.
- Add indexes after the schema shape is stable, ideally as a migration.

## Remaining Cleanup

- Treat `packages/server` as legacy unless it is explicitly needed again.
- Do not port new production behavior back to `packages/server` unless the package remains part of deployment.
- Replace TypeORM `synchronize` with migrations before the app becomes public and stable.
- Add indexes for common production reads once the deployed app is stable.
- Add a small smoke test that reads `/`, `/rats`, `/history`, and `/communities` against Supabase.
