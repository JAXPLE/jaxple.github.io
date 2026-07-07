import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'
import obfuscator from 'vite-plugin-javascript-obfuscator'

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    tailwindcss(),
    obfuscator({
      include: ['src/**/*.ts', 'src/**/*.tsx'],
      exclude: [/node_modules/],
      apply: 'build',
      options: {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.7,
        debugProtection: true,
        debugProtectionInterval: 3000,
        numbersToExpressions: true,
        simplify: true,
        stringArray: true,
        stringArrayEncoding: ['base64'],
        stringArrayThreshold: 0.75,
        selfDefending: true,
        domainLock: ['.jaxple.dev', 'localhost', '127.0.0.1'],
        domainLockRedirectUrl: 'about:blank',
      }
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
