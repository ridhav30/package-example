import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      name: 'package-example',
      // the proper extensions will be added
      fileName: 'package-example',
      formats: ["es"]
    },
  },

  rollupOptions: {
    // make sure to externalize deps that shouldn't be bundled
    // into your library
    external: ['react'],
    output: {
      // Provide global variables to use in the UMD build
      // for externalized deps
      globals: {
        react: 'React',
      },
    },
  },
  plugins: [react()]
})
