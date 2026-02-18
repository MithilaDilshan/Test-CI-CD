const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      API_USER_NAME: process.env.CYPRESS_API_USER_NAME,
      API_PASSWORD: process.env.CYPRESS_API_PASSWORD,
      SMOKE_URL: process.env.CYPRESS_URL_SMOKE,
    },
    reporter: "cypress-mochawesome-reporter",
    reporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "Cypress Test Report",
      embeddedScreenshots: true,
      inlineAssets: true,
    },

    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      return config;
    },
  },
});
