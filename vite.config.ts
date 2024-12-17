import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths(),
    svgr({
      svgrOptions: {
        exportType: 'default',
        ref: true,
        svgo: false,
        titleProp: true
      },
      include: '**/*.svg'
    })
  ],
  server: {
    open: '/'
  },
  build: {
    assetsDir: 'assets-frontend',
    sourcemap: true
  },
  publicDir: 'public',
  optimizeDeps: {
    include: ['react']
  },
  base: '/resume/'
});
