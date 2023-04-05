import { createTRPCRouter } from "y/server/api/trpc";
import { productRouter } from "y/server/api/routers/product";

export const appRouter = createTRPCRouter({
  product: productRouter,
});

export type AppRouter = typeof appRouter;
