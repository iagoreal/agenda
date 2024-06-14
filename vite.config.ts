import { defineConfig } from "vite"
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [
    vue(),
  ],
     
  server: {
    proxy: {
      // with options: http://localhost:5173/api/bar-> http://jsonplaceholder.typicode.com/bar
      '/api': {
        target: 'https://6669f5542e964a6dfed73851.mockapi.io/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
     
    },
  },
})
