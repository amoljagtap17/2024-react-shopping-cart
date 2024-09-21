import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: "localhost",
    strictPort: true,
  },
  preview: {
    port: 3000,
    host: "localhost",
    strictPort: true,
  },
});
