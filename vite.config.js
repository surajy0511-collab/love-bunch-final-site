import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" keeps all asset URLs relative, so the site works on GitHub Pages
// project sites (username.github.io/<repo>) as well as custom domains.
export default defineConfig({
  plugins: [react()],
  base: "./",
});
