# drizzle/supabase/node hanging-issue

## Issue

Drizzle executes and inserts into the database successfully, but the node script hangs when exiting.  Without the line inserting with drizzle, the script exits as expected.

## Setup

**Note:** Project requires [docker](https://docs.docker.com/desktop/) for supabase local

**Note:** Project uses typescript and `tsx` to execute.  Same issue happens when running with node/javascript.

1. Install dependencies: `pnpm install`
2. Initialize supabase: `pnpm run supabase:init`
3. Start supabase:  `pnpm run supabase:start`
4. Run main.ts: `pnpm run start:main`

## Reset

To avoid insertion errors, a database reset is required after executing `main.ts`

To reset the database: `pnpm run supabase:reset`

## Workaround

If the `main.ts` script calls `process.exit()` the script will execute and exit without issue.
