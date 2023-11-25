import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vitest/config'
import stylelint from 'vite-plugin-stylelint'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import dotenv from 'dotenv'

dotenv.config()

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      react(),
      stylelint({
         files: ['src/**/*.{ts,tsx,html,css,scss}'],
         cache: false,
         fix: false,
      }),
      vanillaExtractPlugin(),
   ],
   resolve: {
      alias: {
         '@': path.resolve(__dirname, './src'),
         '@tests': path.resolve(__dirname, './tests'),
      },
   },
   test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: '@testing-library/jest-dom',
      mockReset: true,
   },
   root: '.',
   define: {
      'process.env': {},
      __VITE_BACKEND_URL__: `"${process.env.VITE_BACKEND_URL}"`,
   },
})
