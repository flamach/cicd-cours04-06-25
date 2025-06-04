import { defineConfig } from 'vite'

export default defineConfig({
  // Configuration pour une app avec backend Express
  server: {
    proxy: {
      // Proxy les requêtes API vers votre serveur Express
      '/api': 'http://localhost:3000',
      '/auth': 'http://localhost:3000'
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        main: './index.html'
      }
    }
  }
})