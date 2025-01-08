const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'te6y4i',
  e2e: {
    // testIsolation: false,
    baseUrl: "https://practicetestautomation.com/practice-test-login/",
    setupNodeEvents(on, config) {
      on('after:run', (results) => {
        if (results) {
          // results will be undefined in interactive mode
          console.log('123123')
        }
      })
    },
  },

  // component: {
  //   devServer: {
  //     framework: 'react',
  //     bundler: 'vite',
  //     // optionally pass in vite config
  //     // viteConfig: customViteConfig,
  //     // // or a function - the result is merged with
  //     // // any `vite.config` file that is detected
  //     // viteConfig: async () => {
  //     //   // ... do things ...
  //     //   const modifiedConfig = await injectCustomConfig(baseConfig)
  //     //   return modifiedConfig
  //     // },
  //   },
  // },
});
