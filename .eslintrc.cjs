module.exports = {
    root: true,
    env: {
        browser: true,
        es2020: true,
        node: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    plugins: ['react-refresh', 'react'],
    rules: {
        // // React Refresh
        // 'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // React
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',

        // TypeScript
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',

        // Общие
        'no-console': 'warn',
        'prefer-const': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
}