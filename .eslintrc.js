const prettierConfig = require('./.prettierrc.js')

module.exports = {
    "env": {
        "es6": true,
        "node": true,
        "mocha": true,
        "jquery": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 7,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "experimentalDecorators": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
        "assert": true,
        "console": true,
        "document": true,
        "exports": true,
        "gapi": true,
        "google": true,
        "mixpanel": true,
        "module": false,
        "expect": true,
        "window": true,
        "Image": true,
        "fetch": true,
        "Blob": true,
        "URL": true
    },
    "plugins": ["react", "prettier"],
    "rules": {
        "prettier/prettier": ["error", prettierConfig],
        "react/jsx-uses-vars": 2,
        "react/jsx-uses-react": 2,
        "no-unused-vars": "error",
        "no-console": "off",
        "prefer-const": "error",
        "no-var": "error"
    }
}
