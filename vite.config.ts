import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
// GitHub Pages serves project sites from /<repo-name>/.
// If you use a custom domain or a <user>.github.io repo, set base to "/".
export default defineConfig({
  base: "/Synergy/",
  plugins: [react()],
});
