import { defineConfig } from 'drizzle-kit'
import { config } from 'dotenv'

config({ path: ".env.local" })

export default defineConfig({
  schema: "./config/schema.tsx",
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DRIZZLE_DB_HOST as string,
  },
  verbose: true,
  strict: true,
})