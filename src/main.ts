import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./db/schema/schema";
import type { UserInsert } from "./db/schema/schema";
import dotenv from "dotenv";

console.log('loading environment variables');
dotenv.config();

console.log("creating postgres client to ", process.env.DATABASE_URL!);
const client = postgres(process.env.DATABASE_URL!);

console.log("creating drizzle instance")
const db = drizzle({
  client,
  casing: "snake_case",
  schema,
});

console.log("creating dummy data");
const userData: UserInsert = {  
  firstName: "first",
  lastName: "last",
  email: "first.last@email.com",
};

console.log("inserting dummy data");
await db.insert(schema.users).values(userData);
console.log("insert complete");

// without an explicit call to process.exit()
// and the drizzle call to db.insert
// the script will hang indefinitely on exit
//
// console.log("explicitly exiting the script");
// process.exit(0); 
