import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    react({
      // Include JSX/TSX files
      include: /\.(jsx|tsx|ts|js|mjs)$/,
      // Babel options
      babel: {
        plugins: [],
        babelrc: false,
        configFile: false,
      }
    })
  ],
  optimizeDeps: {
    exclude: ['lucide-react']
  }
});