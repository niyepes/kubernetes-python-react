import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const backendUrl =
  process.env.VITE_API_URL || "http://localhost:8000";

console.log(backendUrl);

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    proxy: {
      "/messages": {
        target: backendUrl,
        changeOrigin: true,
        secure: false,
      },
    },
  },
});