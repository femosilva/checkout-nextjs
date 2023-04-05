import {
  createTRPCRouter,
  publicProcedure,
} from "y/server/api/trpc";
import { idSchema } from 'src/types'

export const productRouter = createTRPCRouter({
  all: publicProcedure
    .query(({ ctx }) => {
      // const products = await ctx.prisma.product.findMany()
      // return products.map(({ name, price, image, available }) => ({ name, price, image, available }))
      return [{
        id: 1,
        name: 'Test',
        price: '299',
        image: 'wwww.com.br',
        slug: 'productSlug',
        available: true
      },
      {
        id: 2,
        name: 'Test2',
        price: '99',
        image: 'wwww.com.br',
        slug: 'productSlug2',
        available: true
      },
      {
        id: 3,
        name: 'Test3',
        price: '199',
        image: 'wwww.com.br',
        slug: 'productSlug',
        available: true
      },
      ]
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