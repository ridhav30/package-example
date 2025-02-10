import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'package-example',
      fileName: (format) => {
        if (format === 'es') {
          return 'package-example.js';
        } else if (format === 'umd') {
          return 'package-example.umd.cjs';
        }
      },
      formats: ['es', 'umd'], // Include both ESM and UMD formats
    },
    rollupOptions: {
      // Externalize React and ReactDOM
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [react()],
});