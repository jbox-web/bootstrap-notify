module.exports = {
  "env": {
    "browser": true,
    "node": true
  },
  "plugins": [
    "coffeescript"
  ],
  "extends": [
    "eslint:recommended"
  ],
  "globals": {
    "define": true,
    "jQuery": true,
  },
  "rules": {
    "no-prototype-builtins": [
      "warn"
    ],
  }
}
