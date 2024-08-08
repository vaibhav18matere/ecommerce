import { productInsertSchema, products } from "@/server/db/schema";
import { adminProcedure, createTRPCRouter } from "../trpc";
import { z } from "zod";
import { eq } from "drizzle-orm";
import { db } from "@/server/db";

export const adminRouter = createTRPCRouter({
  // create new product

  createProduct: adminProcedure
    .input(productInsertSchema)
    .mutation(async ({ ctx: { db }, input }) => {
      await db.insert(products).values(input);
    }),

  // update existing product

  updateProduct: adminProcedure
    .input(
      productInsertSchema
        .partial()
        .omit({
          id: true,
        })
        .extend({
          productId: z.string().uuid(),
        }),
    )
    .mutation(async ({ ctx: { db }, input: { productId, ...finalInput } }) => {
      await db
        .update(products)
        .set(finalInput)
        .where(eq(products.id, productId));
    }),

  // get all products

  getAllProducts: adminProcedure.query(async ({ ctx: { db } }) => {
    const gotAllProducts = await db.select().from(products);

    return {
      gotAllProducts,
    };
  }),

  // delete existing product

  deleteProduct: adminProcedure
    .input(
      z.object({
        productId: z.string().uuid(),
      }),
    )
    .mutation(async ({ ctx: { db }, input: { productId } }) => {
      await db.delete(products).where(eq(products.id, productId));
    }),
});
