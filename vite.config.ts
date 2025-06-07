import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Set the base path for GitHub Pages - this should match your repository name
  base: '/Pluginfactory_privacypolicy',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
