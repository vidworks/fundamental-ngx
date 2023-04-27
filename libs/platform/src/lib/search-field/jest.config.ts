import baseConfig from '../../../../../jest.config.base';

export default {
    ...baseConfig,
    displayName: 'platform-search-field',
    preset: '../../../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts', '../../../../../jest-extended-matchers.ts'],
    coverageDirectory: '../../../../../coverage/libs/platform/src/lib/search-field',
};