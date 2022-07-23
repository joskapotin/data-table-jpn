import * as path from "node:path"
import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/lib/dataTable.tsx"),
      name: "DataTable",
      fileName: format => `dataTable.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  base: "./",
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
})
