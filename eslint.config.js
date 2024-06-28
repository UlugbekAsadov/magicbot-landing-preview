module.exports = {
  extends: ["next", "prettier"],
  plugins: ["prettier"],
  rules: {
    "prettier/prettier": "warn",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
};
