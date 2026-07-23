# EVE Incursions

Tracker for [EVE Online](https://www.eveonline.com/) incursions ï¿½ live spawn status,
influence history, spawn history, community list and Sansha rat stats. Data is pulled
from CCP's [ESI API](https://esi.evetech.net/).

> **Status: retired.** This project is being sunset and is no longer maintained.
> It is published as-is for anyone who wants to read, fork, or self-host it. I will
> **not** be providing any support, fixes, reviews, or help with setup, and I will not
> be responding to issues or pull requests. You are entirely on your own ï¿½ please do
> not contact me for assistance. See the [LICENSE](LICENSE) for the (lack of) warranty.

## Slim Version

A simplified non-Docker version now lives in `packages/slim`. It can run with a local SQLite database or, when `DB_MODE=supabase`, with Supabase/Postgres. It does not require GraphQL, Redis, WebSockets, MariaDB, or Docker.

Quick start:

```bash
npm install
npm run slim:sync
npm run slim:rats
npm run slim:dev
```

Then open `http://localhost:4004`.

See `packages/slim/README.md` for production and scheduler notes.
## Architecture

A npm-workspaces monorepo with three services, wired together with Docker Compose:

| Package           | What it is                              | Port (host) |
| ----------------- | --------------------------------------- | ----------- |
| `packages/server` | GraphQL API + ESI scrapers (TypeScript) | `4001`      |
| `packages/ws`     | WebSocket server (push live updates)    | `4003`      |
| `packages/frontend` | Next.js site (SSR)                    | `4002`      |

Backing services: **SQLite** (file-backed app DB) and **Redis** (internal). In production a
[caddy-docker-proxy](https://github.com/lucaslorentz/caddy-docker-proxy) container routes
everything under one host; locally you can hit the services directly or run caddy too.

## Prerequisites

- Docker + Docker Compose
- A root `.env` file (see below)

## Configuration

Create a `.env` in the repo root (it is gitignored):

```env
DB_FILE=/eve-incursions/tmp/app.db
```

`DB_FILE` points at the SQLite database file used by the server container. The compose
files default to SQLite, so no separate database service is required anymore.

## Run it locally

The base `docker-compose.yml` is the production definition; the dev overlay
`docker-compose.dev.yml` adds the start commands, an `init` step that runs `npm install`,
and published ports.

```bash
# 1. (optional) start the caddy reverse proxy -> serves everything on http://localhost
cd caddy && docker compose up -d && cd ..

# 2. bring up the dev stack (installs deps, starts API/frontend/ws, and runs the scheduler)
docker compose -f docker-compose.yml -f docker-compose.dev.yml up
```

Then open:

- **http://localhost:4002** ï¿½ the frontend directly, or
- **http://localhost** ï¿½ via caddy (only if you started caddy)

> Note: hit port **4002** for the frontend. `http://localhost` only works when the caddy
> proxy is running.

### Seed the data

The app database is created automatically on first start. The dev scheduler now performs
an initial spawn and sovereignty sync on startup, so the homepage should populate shortly
after the containers are up.

The archived file `seed/eve-incursions-seed.sql.gz` is an old MariaDB dump kept only for
reference; it is not imported by the SQLite-based setup.

## Useful commands

```bash
DC="docker compose -f docker-compose.yml -f docker-compose.dev.yml"

$DC up                       # start everything (foreground)
$DC up -d                    # start detached
$DC logs -f scheduler        # tail initial/import jobs
$DC logs -f frontend         # tail a service
$DC exec frontend sh         # shell into a container
$DC down                     # stop the stack
```

Server scripts (run inside the `server` container, or from `packages/server`):

| Script                  | Purpose                              |
| ----------------------- | ------------------------------------ |
| `npm start`             | GraphQL API (watch mode)             |
| `npm run scheduler`     | Periodic ESI update jobs             |
| `npm run spawns:update` | One-off: refresh active spawns       |
| `npm run systems:update`| One-off: refresh system data         |
| `npm run sov:update`    | One-off: refresh sovereignty         |
| `npm run rats:update`   | One-off: refresh rat stats           |
| `npm test`              | Vitest                               |

## Production

`docker-compose.yml` + `docker-compose.prod.yml` (and `docker-compose.stage.yml` for
staging) define the deployed stack, routed by the external caddy proxy in `caddy/`.

## Tech stack

Next.js ï¿½ React ï¿½ TypeScript ï¿½ GraphQL ï¿½ SQLite ï¿½ Redis ï¿½ Docker ï¿½ Chart.js

