// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // This line is the key to solving the 'test is not defined' error
    globals: true,
    // Add the include pattern for your test files
    include: ['Block-0_Javascript-Foundations/Week-2/Project/Bill-Split-Pro/test/*.test.js'],
  },
});
