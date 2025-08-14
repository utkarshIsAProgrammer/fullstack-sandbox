import js from '@eslint/js';
import vitestPlugin from 'eslint-plugin-vitest';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    // Configuration for your standard JavaScript files
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'module',
      globals: { ...globals.browser },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
    },
  },
  {
    // Configuration for Vitest test files
    files: ['**/*.test.js'],
    plugins: {
      vitest: vitestPlugin,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...vitestPlugin.environments.globals.globals,
      },
    },
    rules: {
      // You can add specific rules for your test files here
      // For example:
      // 'vitest/expect-expect': 'error'
    },
  },
];
