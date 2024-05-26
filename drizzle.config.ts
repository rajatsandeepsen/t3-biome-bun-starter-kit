import type { Config } from "drizzle-kit";

import { env } from "@/env";

export default {
	schema: "./server/db/schema.ts",
	driver: "pg",
	dbCredentials: {
		connectionString: env.DATABASE_URL,
	},
	tablesFilter: ["transactions_*"],
} satisfies Config;
