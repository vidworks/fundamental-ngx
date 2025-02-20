import baseConfig from '../../../../../jest.config.base';

export default {
    ...baseConfig,
    displayName: 'platform-link',
    preset: '../../../../../jest.preset.js',
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts', '../../../../../jest-extended-matchers.ts'],
    coverageDirectory: '../../../../../dist/coverage/platform-link'
};
