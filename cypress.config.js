const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    video: false
  },
});


require('@applitools/eyes-cypress')(module);
