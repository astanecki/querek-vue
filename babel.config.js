module.exports = function(api) {
    api.cache(true);

    return {
        sourceType: 'unambiguous',
        presets: ['@babel/env', '@babel/typescript'],
        plugins: [
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-syntax-dynamic-import',
            [
                '@babel/plugin-transform-runtime',
                {
                    regenerator: true,
                },
            ],
        ],
        env: {
            test: {
                presets: ['@babel/env', '@babel/typescript'],
                plugins: [
                    '@babel/plugin-proposal-object-rest-spread',
                    '@babel/plugin-proposal-class-properties',
                    'dynamic-import-node',
                    [
                        '@babel/plugin-transform-runtime',
                        {
                            regenerator: true,
                        },
                    ],
                ],
            },
        },
    };
};
