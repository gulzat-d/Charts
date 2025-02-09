module.exports = {
    root: true,
    env: { browser: true, es2021: true },
    extends: [
        'airbnb',
        'airbnb/hooks',
        'airbnb-typescript',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier'
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        project: './tsconfig.json'
    },
    plugins: ['react-refresh', 'react', 'prettier'],

    rules: {
        'react/no-array-index-key': 'off',
        'react/function-component-definition': 'off',
        'react/no-unstable-nested-components': 'off',
        'import/prefer-default-export': 'off',
        '@typescript-eslint/indent': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        'react/jsx-filename-extension': [
            1,
            { extensions: ['.js', '.jsx', '.ts', '.tsx'] }
        ],
        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: [
                    // 'src/components/**/*.stories.tsx',
                    'src/**/*.test.{ts,tsx}'
                ]
            }
        ],
        'react/jsx-props-no-spreading': 'off',
        'react/display-name': 'off',
        'react/prop-types': 'off',
        'react/button-has-type': 'off',
        'react/react-in-jsx-scope': 0,
        'react-refresh/only-export-components': [
            'warn',
            { allowConstantExport: true }
        ],
        'prettier/prettier': ['error'],
        'react/require-default-props': 'off',
        'no-restricted-exports': 'off',
        'react-hooks/exhaustive-deps': 'warn',
        '@typescript-eslint/no-explicit-any': 'warn',
        'import/no-cycle': 'off'
    }
};
