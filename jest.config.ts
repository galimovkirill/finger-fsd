import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],

  moduleNameMapper: {
    "^.+\\.(css|less|scss)$": "identity-obj-proxy",
    "@/(.*)": "<rootDir>/src/$1",
  },

  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },

  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // A preset that is used as a base for Jest's configuration
  preset: "ts-jest/presets/js-with-ts",

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  setupFilesAfterEnv: ["<rootDir>/jest-setup.ts"],
};

export default config;
