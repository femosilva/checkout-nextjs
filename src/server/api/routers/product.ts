
import {
  createTRPCRouter,
  publicProcedure,
} from "y/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAllProducts: publicProcedure
    .query(({ ctx }) => {
      // const products = await ctx.prisma.product.findMany()
      // return products.map(({ name, price, image, available }) => ({ name, price, image, available }))
      return [{
        id: 1,
        name: 'Test',
        price: '299',
        image: 'wwww.com.br',
        available: true
      },
      {
        id: 2,
        name: 'Test2',
        price: '99',
        image: 'wwww.com.br',
        available: true
      },
      {
        id: 3,
        name: 'Test3',
        price: '199',
        image: 'wwww.com.br',
        available: true
      },
      ]
    }),
  // createProduct: publicProcedure.query(async ({ ctx }) => {
  //   const products = await ctx.prisma.product.count()
  //   return {
  //     data: products
  //   };
  // })
});