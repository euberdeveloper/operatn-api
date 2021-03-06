const path = require('path');
const DtsBundleWebpack = require('dts-bundle-webpack');

module.exports = {
    target: 'node',
    mode: 'production',
    // devtool: 'source-map',
    entry: {
        index: './source/index.ts',
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts?$/,
                include: [
                    path.resolve(__dirname, 'source')
                ],
                use: [
                    {
                        loader: 'ts-loader',
                        options: {
                            compiler: 'ttypescript'
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new DtsBundleWebpack({
            name: 'operatn-api-client',
            main: 'dist/index.d.ts',
            out: '../bundled/index.d.ts'
        })
    ],
    output: {
        path: path.resolve(__dirname, './bundled'),
        filename: 'index.js',
        library: 'operatn-api-client',
        libraryTarget: 'umd'
    }
}