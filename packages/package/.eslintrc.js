/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ["@package/eslint-config/eslint.config.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
