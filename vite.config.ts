import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

  // Other Vite configuration options


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png', '**/*.gif', '**/*.svg'], // Include image file types

})
