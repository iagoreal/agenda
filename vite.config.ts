import { defineConfig } from "vite"

export default defineConfig({
  server: {
    proxy: {
      // string shorthand: http://localhost:5173/foo -> http://localhost:4567/foo
      '/': 'http://localhost:4567',
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'https://6669f5542e964a6dfed73851.mockapi.io/contacts',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
     
    },
  },
})
