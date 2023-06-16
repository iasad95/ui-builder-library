const esModules = ['@angular', '@ngx-translate/core', '@ngx-translate/http-loader', 'primeng', 'moment'].join('|');

const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.json');

module.exports = {
  preset: 'jest-preset-angular',
  roots: ['<rootDir>/projects/ui-builder-component-lib/src/'],
  testMatch: ['**/+(*.)+(spec).+(ts)'],
  setupFilesAfterEnv: ['./setupJest.ts'],
  collectCoverage: true,
  coverageReporters: ['html'],
  coverageDirectory: './coverage/my-app',
  transform: {
    '^.+\\.(ts|js|mjs|html|svg)$': 'jest-preset-angular',
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths || {}, {
    prefix: '<rootDir>/',
  }),
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'mjs'],
  transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
  extensionsToTreatAsEsm: ['.ts'],
  globals: {
    'ts-jest': {
      useESM: true, // ts-jest
    },
  },
  testTimeout: 1000000,
};
