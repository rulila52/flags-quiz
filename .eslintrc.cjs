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
    ignorePatterns: ['dist', 'vite.config.ts'],
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
        // React Refresh
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],

        // React
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/jsx-closing-bracket-location': 'warn',
        'react/jsx-indent': ['warn', 4],
        'react/jsx-indent-props': ['warn', 4],

        // TypeScript
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/member-delimiter-style': [
            'error',
            {
                multiline: {
                    delimiter: 'semi',
                    requireLast: true,
                },
                singleline: {
                    delimiter: 'semi',
                    requireLast: false,
                },
            },
        ],

        // Общие
        'no-console': 'error',
        'prefer-const': 'error',
        'arrow-body-style': ['warn', 'always'],
        'quotes': ['warn', 'single'],
        'comma-dangle': [
            'warn',
            {
                arrays: 'always-multiline',
                objects: 'always-multiline',
                imports: 'always-multiline',
                exports: 'always-multiline',
                functions: 'always-multiline',
            },
        ],
        'arrow-parens': 'warn',
        'object-curly-spacing': ['warn', 'always'],
        'jsx-quotes': ['warn', 'prefer-double'],
        'linebreak-style': ['warn', 'unix'],
        'max-len': [
            'warn',
            {
                code: 120,
                ignoreUrls: true,
                ignoreStrings: true,
                ignoreTemplateLiterals: true,
                ignoreRegExpLiterals: true,
            },
        ],
        'function-paren-newline': ['warn', 'consistent'],
        'implicit-arrow-linebreak': ['warn', 'beside'],
        'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
        // empty line in the end of file
        'eol-last': ['warn', 'always'],
        'react/jsx-curly-brace-presence': [
            'warn',
            {
                props: 'never',
                children: 'never',
                propElementValues: 'always',
            },
        ],
        '@typescript-eslint/semi': 'error',
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
