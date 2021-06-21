/*** @type {import('rollup-plugin-eslint')} */
module.exports = {
    // "parser": "@typescript-eslint/parser",
    'env': {
        'browser': true,
        'es6': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'globals': {
        'Atomics': 'readonly',
        'SharedArrayBuffer': 'readonly',
        'ENV': true
    },
    'plugins': [
        '@typescript-eslint/eslint-plugin',
        'prettier',
        'import',
    ],
    'parserOptions': {
        'project': 'tsconfig.json',
        'ecmaVersion': 2015,
        'sourceType': 'module'
    },
    'parser': 'babel-eslint',
    'rules': {
        
        'linebreak-style': [
          'off',
          'windows'
        ],
        'quotes': [
          'error',
          'single'
        ],
        'no-unused-vars':0
    }
};