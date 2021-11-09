module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'react-native/react-native': true
    },
    'extends': [
        'eslint:recommended',
        'plugin:react/recommended'
    ],
    'parserOptions': {
        'ecmaFeatures': {
            'jsx': true
        },
        'ecmaVersion': 13,
        'sourceType': 'module'
    },
    'plugins': [
        'react',
        'react-native'
    ],
    'rules': {
        'semi': ['error', 'never'],
        'quotes': ['error', 'single'],
        'react-native/no-unused-styles': 2,
        'react-native/split-platform-components': 2,
        'react-native/no-inline-styles': 2,
        'react-native/no-raw-text': 2,
        'react-native/no-single-element-style-arrays': 2
    }
}
