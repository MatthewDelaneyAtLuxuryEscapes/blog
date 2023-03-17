import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    reporters: ['dot'],
    outputFile: './tests/report',
    coverage: {
      provider: 'c8',
      reporter: ['text'],
      reportsDirectory: './tests/unit/coverage',
      src: ['./src'],
      extension: ['.ts'],
      clean: true,
    },
  },
})
