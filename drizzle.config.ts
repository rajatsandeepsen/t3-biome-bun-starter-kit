import { env } from "@/env";
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
	out: './drizzle',
	schema: "./server/db/schema.ts",
	dialect: 'postgresql',
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	tablesFilter: ["database_*"],
});