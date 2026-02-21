import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.',
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        playbook: resolve(__dirname, 'playbook.html'),
        cases: resolve(__dirname, 'cases.html'),
        test30: resolve(__dirname, '30sec-test.html'),
        fakedoor: resolve(__dirname, 'fake-door.html'),
        workshop: resolve(__dirname, 'workshop.html'),
        dashboard: resolve(__dirname, 'dashboard.html'),
        slides: resolve(__dirname, 'slides.html'),
      },
    },
  },
  server: {
    open: true,
  },
});
