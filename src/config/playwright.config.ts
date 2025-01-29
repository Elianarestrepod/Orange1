import { defineConfig } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'Google Chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome', 
        headless: false,   
      },
    },
  ],
});
