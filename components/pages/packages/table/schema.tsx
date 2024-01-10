import { z } from "zod";

export const packageSchema = z.object({
  id: z.string(),
  name: z.string(),
  location: z.string(),
  price: z.number(),
  inclusions: z.array(z.string()),
  exclusions: z.array(z.string()),
  status: z.string(),
  dates: z.array(z.date()),
});

export type PackageType = z.infer<typeof packageSchema>;
