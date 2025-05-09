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
        // "./App": "./src/App",
        "./App": "./src/web-component.tsx",
      },
      filename: "remoteEntry-[hash].js", // not needed?
      manifest: true,
      shared: {
        react: {
          singleton: true,
        },
        "react/": {
          singleton: true,
        },
      },
      // library: { type: "global", name: "child_react_vite_app" }, // not sure what it is
    }),
    react(),
  ],
});
