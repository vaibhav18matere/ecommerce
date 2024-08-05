// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { sql } from "drizzle-orm";
import {
  boolean,
  index,
  integer,
  pgTable,
  text,
  timestamp,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const users = pgTable(
  "users",
  {
    id: uuid("id").primaryKey().notNull().defaultRandom(),
    name: varchar("name", { length: 256 }),
    email: text("email").notNull().unique(),
    // checking if user is admin or not to give certain permissions later
    isAdmin: boolean("is_admin").default(false),
    createdAt: timestamp("created_at", { withTimezone: true })
      .default(sql`CURRENT_TIMESTAMP`)
      .notNull(),
    updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
      () => new Date(),
    ),
  },
  (example) => ({
    nameIndex: index("name_idx").on(example.name),
  }),
);

export const products = pgTable("products", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  name: varchar("name", { length: 256 }),
  description: varchar("description", { length: 256 }),
  quantity: integer("quantity").notNull().default(0),
  imageUrl: text("image_url").notNull(),
  // slug: varchar("slug", { length: 20 }),
  createdAt: timestamp("created_at", { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
  // updatedAt: timestamp("updated_at", { withTimezone: true }).$onUpdate(
  //   () => new Date(),
  // ),
});

export const orders = pgTable("orders", {
  id: uuid("id").primaryKey().notNull().defaultRandom(),
  userId: uuid("user_id").references(() => users.id),
  productId: uuid("product_id").references(() => products.id),
  address: text("address"),
  paymentStatus: boolean("payment_status").default(false),
  orderStatus: boolean("order_status").default(false),
});
