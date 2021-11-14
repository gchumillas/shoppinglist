module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "extends": [
        "standard",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 13,
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "multiline-ternary":  "off",
        "camelcase": "off", // some packages exposes non-camelcase entities
        "semi": ["error", "never"],
        "quotes": ["error", "single"],
        "react/prop-types": "off",
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2]
    }
};
