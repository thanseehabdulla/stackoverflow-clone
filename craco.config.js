// craco.config.js
module.exports = {
    style: {
      sass: {
        loaderOptions: {
          additionalData: `@use '@carbon/react/scss/index' as *;`,
        },
      },
    },
  };
  