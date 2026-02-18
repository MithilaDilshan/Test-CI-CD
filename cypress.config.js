const { defineConfig } = require("cypress");
require("dotenv").config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      API_USER_NAME: process.env.CYPRESS_API_USER_NAME,
      API_PASSWORD: process.env.CYPRESS_API_PASSWORD,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
