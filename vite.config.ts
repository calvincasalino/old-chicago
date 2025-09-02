import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // dev => '/', prod => '/old-chicago/'
  base: mode === 'production' ? '/old-chicago/' : '/',
}))
