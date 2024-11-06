import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/bolt-react-hello-world/', // Asegúrate de que el nombre coincida con el nombre de tu repositorio
});

