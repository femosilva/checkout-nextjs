import {
  createTRPCRouter,
  publicProcedure,
} from "y/server/api/trpc";
import { idSchema } from 'src/types'

export const productRouter = createTRPCRouter({
  all: publicProcedure.query(async ({ ctx }) => {
    const products = await ctx.prisma.product.findMany()
    return products.map(({ id, name, price, image, available }) => ({ id, name, price, image, available }))
  }),
  unique: publicProcedure.input(idSchema).query(async ({ ctx, input }) => {
    return await ctx.prisma.product.findFirst({
      where: {
        id: input.id,
      },
    });
  }),
  // create: publicProcedure.query(async ({ ctx }) => {
  //   const products = await ctx.prisma.product.create({})
  //   return {
  //     data: products
  //   };
  // })
});