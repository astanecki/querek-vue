const config = {
    verbose: false,
    rootDir: '../',
    moduleFileExtensions: ['js', 'vue', 'json'],
    moduleDirectories: ['node_modules', 'src/components'],
    modulePathIgnorePatterns: ['.*/src/.*/__mocks__.*'],
    testRegex: '/src/.*test.jest.(js|vue)?$',
    clearMocks: true,
    restoreMocks: true,
    transform: {
        '^.+\\.js$': 'babel-jest',
        '.*\\.(vue)$': '<rootDir>/node_modules/vue-jest',
    },
};

module.exports = config;
