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
        "eqeqeq": "off",
        "arrow-parens": ["error", "as-needed"],
        "react/prop-types": "off",
        "react/jsx-indent": [2, 2],
        "react/jsx-indent-props": [2, 2],
        "react/jsx-boolean-value": ["error", "never"],
        "react/jsx-closing-bracket-location": "error",
        "react/jsx-curly-newline": "error",
        "react/jsx-curly-spacing": "error",
        "react/jsx-equals-spacing": ["error", "never"],
        "react/jsx-no-constructed-context-values": "error",
        "react/jsx-props-no-multi-spaces": "error",
        "react/jsx-tag-spacing": "error"
    }
};
