const config = {
  verbose: true,
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest-setup.js"],
  moduleNameMapper: {
    "\\.(css|scss|svg)$": "<rootDir>/src/testSetup/jestStyleMock.js",
    "\\.(png|jpg|jpeg)$": "<rootDir>/src/testSetup/stringMock.js",
  },
};

export default config;
