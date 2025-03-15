import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/MyPortfolio/", // Ensure it matches your repository name exactly
  plugins: [react()],
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    open: true,
  },
});