module.exports = {
  setupTestFrameworkScriptFile: "./setupTests.js",
  testMatch: [
    "**/specs/**/*.js"
  ],
  globals: {
    __baseUrl__: "http://app-local.COMPANY.com:8080"
  }
};
