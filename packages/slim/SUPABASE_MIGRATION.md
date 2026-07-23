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
- `sync:all` imports static data, spawns, sovereignty, and rats.
- The scheduler imports static data, rats, spawns, and sovereignty on startup.
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

- RLS is enabled on the current public app tables.
- Public read policies exist for `anon` and `authenticated`; no public write policies were added.
- Foreign-key and common read indexes have been added in Supabase.
- Performance advisor may temporarily report the new indexes as unused until production traffic exercises them.
- These database changes were applied directly in Supabase and should be captured as migrations before the schema is considered stable.

## Remaining Cleanup

- Treat `packages/server` as legacy unless it is explicitly needed again.
- Do not port new production behavior back to `packages/server` unless the package remains part of deployment.
- Replace TypeORM `synchronize` with migrations before the app becomes public and stable.
- Add a small smoke test that reads `/`, `/rats`, `/history`, and `/communities` against Supabase.
