import dotenv from 'dotenv';
import { defineConfig } from 'drizzle-kit';

const myEnv = dotenv.config();

console.log(`URL": ${process.env.DATABASE_URL}`);

export default defineConfig({
  out: './supabase/migrations',
  schema: './src/db/schema',
  dialect: 'postgresql',
  dbCredentials: {
    url: `${process.env.DATABASE_URL!}`,
  },
  schemaFilter: ['public'],
  entities: {
    roles: {
      provider: 'supabase',
    },
  },
});