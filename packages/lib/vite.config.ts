import { resolve } from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { libInjectCss } from "vite-plugin-lib-inject-css";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    dts({
      tsconfigPath: "tsconfig.app.json",
    }),
  ],
  optimizeDeps: {
    exclude: ["react", "react-dom", "react/jsx-runtime", "@xyflow/react"],
  },
  build: {
    minify: "esbuild",
    lib: {
      entry: resolve(__dirname, "src/lib.ts"),
      formats: ["es"],
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "@xyflow/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "react/jsx-runtime": "jsxRuntime",
          "@xyflow/react": "XyflowReact",
        },
      },
    },
  },
});
