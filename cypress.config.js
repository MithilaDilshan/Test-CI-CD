const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: process.env.CYPRESS_BASE_URL || "http://192.168.62.238",
    setupNodeEvents(on, config) {
      return config;
    },
  },
});
