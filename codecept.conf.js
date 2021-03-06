const { setHeadlessWhen } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

exports.config = {
  tests: './e2e/*_test.js',
  output: './e2e/outputs',
  helpers: {
    Puppeteer: {
      url: 'http://localhost:8080/',
      show: true,
      windowSize: '1200x900'
    }
  },
  include: {
    I: './steps_fil.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'restooo',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}
