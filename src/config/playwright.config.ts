import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome', // Usa Google Chrome
        headless: false,   // Deshabilitar el modo headless para abrir el navegador
      },
    },
  ],
});
