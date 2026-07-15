import { defineConfig } from "vite";
import { nitroV2Plugin as nitro } from "@solidjs/vite-plugin-nitro-2";
import { solidStart } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import dotenv from "dotenv";

dotenv.config();

export default defineConfig({
  plugins: [
    solidStart(),
    tailwindcss(),
    nitro()
  ],
  server: {
    allowedHosts: true,
  },
});
