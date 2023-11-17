module.exports = {
    parser: "babel-eslint",
    env: {
      browser: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:import/errors", "plugin:import/warnings"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      sourceType: "module",
    },
    plugins: ["react", "import"],
    rules: {
      // Add your specific rules here
      // For example:
      "react/jsx-uses-react": "error",
      "react/jsx-uses-vars": "error",
      "no-console": "warn",
      "import/order": ["error", { "newlines-between": "always" }],
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  };
  