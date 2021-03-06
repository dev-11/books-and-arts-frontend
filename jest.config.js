module.exports = {
  collectCoverage: true,
  collectCoverageFrom: [
    "src/**/*.{js,vue}",
    "!src/main.js", // No need to cover bootstrap file
    "!src/plugins/*"
  ],
  moduleFileExtensions: [
    "js",
    "jsx",
    "json",
    "vue"
  ],
  transform: {
    "^.+\\.vue$": "vue-jest",
    ".+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$": "jest-transform-stub",
    "^.+\\.jsx?$": "babel-jest"
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1"
  },
  snapshotSerializers: [
    "jest-serializer-vue"
  ],
  testMatch: [
    "**/tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx)"
  ],
  // coverageReporters: ["lcov", "text-summary"],
  testURL: "http://localhost/"
};
