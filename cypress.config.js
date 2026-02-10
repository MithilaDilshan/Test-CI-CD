const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://192.168.62.238",
    setupNodeEvents(on, config) {
      return config;
      // implement node event listeners here
    },
  },
});
