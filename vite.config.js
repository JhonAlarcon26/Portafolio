import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portafolio/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
  // Puedes agregar aquí configuraciones adicionales si usas alias o necesitas assets especiales
}); 