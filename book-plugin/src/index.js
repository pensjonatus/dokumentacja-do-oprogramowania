module.exports = function (context, options) {
    return {
        name: 'book-plugin',
        configureWebpack(config, isServer, utils) {
            const { getCacheLoader } = utils;
            return {
                module: {
                    rules: [
                        {
                            test: /\.(png|jpe?g|gif)$/i,
                            use: [
                                {
                                    loader: 'file-loader',
                                },
                            ],
                        },
                    ],
                },
            };
        },
    };
};