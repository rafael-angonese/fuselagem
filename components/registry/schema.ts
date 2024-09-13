import * as z from "zod";

export const registrySchema = z.record(
  z.string(),
  z.object({
    name: z.string(),
    files: z.array(z.object({
        name: z.string(),
        file: z.string()
    })),
    component: z.function().args(z.any()).returns(z.any()).optional(),
  }),
);

export type Registry = z.infer<typeof registrySchema>;
