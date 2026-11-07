import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ isSsrBuild }) => {
  return {
    plugins: [react()],

    ssr: {
      noExternal: ['react-helmet-async'],
    },

    build: {
      sourcemap: false,

      rollupOptions: isSsrBuild
        ? {}
        : {
            output: {
              manualChunks: {
                vendor: [
                  'react',
                  'react-dom',
                  'react-router-dom',
                  'react-helmet-async',
                ],
              },
            },
          },
    },
  };
});