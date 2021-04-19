const path = require('path');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = {
    target: 'node',
    mode: 'production',
    // devtool: 'source-map',
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [new TsconfigPathsPlugin({
            configFile: './source/tsconfig.json',
            extensions: ['.ts', '.js']
        })]
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [
                    path.resolve(__dirname, 'source'),
                    path.resolve(__dirname, '..', 'source')
                ],
                use: [
                    { loader: 'ts-loader' }
                ]
            }
        ]
    },
    plugins: [
        new DtsBundleWebpack({
            name: 'operatn-api-client',
            main: 'dist/api-client/source/index.d.ts',
            out: '../../../bundled/index.d.ts'
        })
    ],
    output: {
        path: path.resolve(__dirname, './bundled'),
        filename: 'index.js',
        library: 'operatn-api-client',
        libraryTarget: 'umd',
        globalObject: 'this',
        umdNamedDefine: true,
    }
}