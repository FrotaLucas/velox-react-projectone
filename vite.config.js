import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    base: '/velox-react-projectone',
    outDir: 'build', // This specifies the output directory for the production build.
  },
});