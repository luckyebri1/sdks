const nxPreset = require('@nx/jest/preset').default;

module.exports = { 
  ...nxPreset,
  transform: {
    '^.+\\.[tj]s$': ['@swc/jest'],
  },
  coverageReporters: ['text', 'html', 'lcov'],
  collectCoverageFrom: [
    'src/**/*.{js,ts}',
    '!src/**/*.spec.{js,ts}',
    '!src/**/*.test.{js,ts}',
    '!src/**/index.{js,ts}',
    '!src/**/*.d.ts',
  ],
}
