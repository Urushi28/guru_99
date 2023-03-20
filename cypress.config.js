const { defineConfig } = require("cypress");

async function setupNodeEvents(on,config) {

  return config;
}


module.exports = defineConfig({
  e2e: {
    setupNodeEvents,
      specPattern: "integration/*.js"
      // implement node event listeners here
    },
});
