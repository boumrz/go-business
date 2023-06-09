import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

const __dirname = path.resolve();

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    "process.env": {},
  },
  build: {
    rollupOptions: {
      input: {
        main: "./index.html",
      },
    },
    outDir: "dist",
    assetsDir: "assets",
  },
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
    }),
  ],
  resolve: {
    alias: [
      {
        find: "@/assets",
        replacement: path.resolve(__dirname, "src/assets"),
      },
      {
        find: "@/icons",
        replacement: path.resolve(__dirname, "src/assets/icons"),
      },
      {
        find: "@/images",
        replacement: path.resolve(__dirname, "src/assets/images"),
      },
      {
        find: "@/pages",
        replacement: path.resolve(__dirname, "src/pages"),
      },
      {
        find: "@/components",
        replacement: path.resolve(__dirname, "src/components"),
      },
      {
        find: "@/services",
        replacement: path.resolve(__dirname, "src/services"),
      },
      {
        find: "@/contexts",
        replacement: path.resolve(__dirname, "src/contexts"),
      },
      {
        find: "@/utils",
        replacement: path.resolve(__dirname, "src/utils"),
      },
      {
        find: "@/constants",
        replacement: path.resolve(__dirname, "src/constants"),
      },
    ],
  },
});
