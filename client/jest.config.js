const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./",
});
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
};

jest.mock("next/router", () => ({
  useRouter: () => {},
}));

module.exports = createJestConfig(customJestConfig);
