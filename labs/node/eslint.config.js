export default [
  {
    files: ["src/**/*.js", "tests/**/*.js", "scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        process: "readonly",
        URL: "readonly",
        fetch: "readonly"
      }
    },
    rules: {
      "no-undef": "error",
      "no-unused-vars": "error",
      "no-var": "error",
      eqeqeq: "error",
      semi: ["error", "always"]
    }
  }
];
