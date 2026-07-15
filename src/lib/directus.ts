// src/lib/directus.ts
import { createDirectus, staticToken, rest } from "@directus/sdk";

const client = createDirectus(process.env.DIRECTUS_URL!)
  .with(staticToken(process.env.DIRECTUS_TOKEN!))
  .with(rest());

export { client };