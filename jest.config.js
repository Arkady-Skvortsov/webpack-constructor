module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    ".(ts)": "<rootDir>/node_modules/ts-jest/preprocessor.js",
  },
  testRegex: "(/__tests__/.*|\\.(test|spec))\\.(ts|tsx|js)$",
  coverageReporters: ["json"],
  moduleFileExtensions: ["js", "ts", "node"],
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  collectCoverageFrom: ["./src/**/*.ts", "!**/node_modules/**"],
  coverageThreshold: {
    global: {
      branches: 95,
      functions: 95,
      lines: 95,
      statements: -10,
    },
  },
};
