const { defineConfig } = require("cypress");
require('dotenv').config();

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL,
    env: {
      API_USER: process.env.CYPRESS_API_USER,
      API_PASS: process.env.CYPRESS_API_PASS,
    },
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
