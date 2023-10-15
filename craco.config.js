module.exports = {
    webpack: {
        configure: (webpackConfig, {env, paths}) => {
            return {
                ...webpackConfig,
                entry: {
                    content: './src/chromeServices/DOMEvaluator.ts',
                    main: [env === 'development' && require.resolve('react-dev-utils/webpackHotDevClient'),paths.appIndexJs].filter(Boolean),
                },
                output: {
                    ...webpackConfig.output,
                    filename: 'static/js/[name].js',
                },
                optimization: {
                    ...webpackConfig.optimization,
                    runtimeChunk: false,
                    minimize: false,
                }
            }
        },
    }
 }