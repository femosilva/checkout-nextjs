import { z } from 'zod';

import type { inferRouterOutputs } from "@trpc/server";
import type { AppRouter } from "./server/api/root";

type RouterOutputs = inferRouterOutputs<AppRouter>
type allProductsOutput = RouterOutputs["product"]["all"]
export type Product = allProductsOutput[number]

export const idSchema = z.object({
    id: z.string(),
});