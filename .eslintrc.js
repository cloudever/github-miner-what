module.exports = {
  extends: [
    "standard",
    "plugin:prettier/recommended",
    "plugin:flowtype/recommended",
    "prettier/flowtype",
    "prettier/standard"
  ],
  plugins: [
    "flowtype",
    "prettier"
  ],
  parser: "babel-eslint",
  rules: {
    "prettier/prettier": "error"
  }
}