const path = require('path');

module.exports = {
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        project: path.join(__dirname, 'tsconfig.json')
    },
    plugins: ['prettier'],
    extends: [
        '@euberdeveloper/typescript',
        'plugin:prettier/recommended'
    ],
    rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-misused-promises': 'off'
    }
};