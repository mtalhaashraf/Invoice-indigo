import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "./schema";

dotenv.config();

export const pool = new pg.Pool({
	connectionString: process.env.DATABASE_URL!,
	ssl: true
});

export const db = drizzle(pool, { schema });
