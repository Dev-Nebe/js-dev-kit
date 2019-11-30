module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": ["airbnb-base", "plugin:import/errors", "plugin:import/warnings"],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "root": true,
    "rules": {
      "no-console": 0,
      "comma-dangle": 0,
      "linebreak-style": 0
    }
};
