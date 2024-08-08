import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "@/server/api/trpc";

export const postRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ text: z.string() }))
    .query(({ input }) => {
      return {
        greeting: `Hello ${input.text}`,
      };
    }),
  something: publicProcedure.query(async ({
    ctx
  }) => {
    console.log("something func from server", ctx.user);
    return {
      zello: "something",
    }
  })
});
