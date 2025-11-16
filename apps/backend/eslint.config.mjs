// @ts-check
import eslint from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';
import pluginUnusedImports from 'eslint-plugin-unused-imports';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    {
        files: ['src/**/*.ts'],
        ignores: ['dist', 'node_modules', 'src/types/**/*.d.ts']
    },

    eslint.configs.recommended,
    ...tseslint.configs.recommendedTypeChecked,
    eslintConfigPrettier,
    {
        languageOptions: {
            globals: {
                ...globals.node,
                ...globals.jest
            },
            sourceType: 'commonjs',
            parserOptions: {
                projectService: {
                    allowDefaultProject: ['eslint.config.mjs']
                },
                tsconfigRootDir: import.meta.dirname
            }
        }
    },
    {
        plugins: {
            prettier: eslintPluginPrettier,
            'unused-imports': pluginUnusedImports
        },
        rules: {
            // Rules from original .eslintrc
            '@typescript-eslint/interface-name-prefix': 'off',
            '@typescript-eslint/explicit-function-return-type': 'off',
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/explicit-module-boundary-types': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/ban-types': 'off',
            '@typescript-eslint/no-empty-interface': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            // Additional rules
            '@typescript-eslint/no-floating-promises': 'warn',
            '@typescript-eslint/no-unsafe-argument': 'off',
            'prettier/prettier': ['warn', { endOfLine: 'auto', printWidth: 100 }],
            'unused-imports/no-unused-imports': 'warn',
            '@typescript-eslint/no-unsafe-assignment': 'off',
            '@typescript-eslint/no-unsafe-call': 'off',
            '@typescript-eslint/no-unsafe-member-access': 'off',
            '@typescript-eslint/no-unsafe-return': 'off',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_'
                }
            ]
        }
    }
);
