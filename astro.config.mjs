import vercel from "@astrojs/vercel/serverless"
import { defineConfig } from 'astro/config'

import svelte from "@astrojs/svelte"

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
  integrations: [svelte()]
});