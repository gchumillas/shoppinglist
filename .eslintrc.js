module.exports = {
    'env': {
        'browser': true,
        'es2021': true,
        'react-native/react-native': true
    },
    'settings': {
        'react': {
            'version': 'detect'
        }
    },
    'extends': [
        'standard',
        'standard-jsx',
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
        'comma-dangle': ['error', 'never'],
        'jsx-quotes': ['error', 'prefer-double'],
        'camelcase': 'off',
        'react/prop-types': 'off',
        'react-native/no-unused-styles': 'error',
        'react-native/split-platform-components': 'error',
        'react-native/no-inline-styles': 'error',
        'react-native/no-raw-text': 'error',
        'react-native/no-single-element-style-arrays': 'error'
    }
}
