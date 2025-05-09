import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { federation } from "@module-federation/vite";

// https://vite.dev/config/
export default defineConfig({
  server: {
    open: true,
    port: 3002,
    origin: "http://localhost:3002",
  },
  preview: {
    port: 3002,
  },
  plugins: [
    federation({
      name: "child_react_vite_app",
      exposes: {
        "./App": "./src/App",
      },
      filename: "remoteEntry-[hash].js",
      manifest: true,
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
    }),
    react(),
  ],
});
