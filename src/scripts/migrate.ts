import { db } from "@/server/db";
import { migrate } from "drizzle-orm/node-postgres/migrator";

await migrate(db, { migrationsFolder: "drizzle" });
