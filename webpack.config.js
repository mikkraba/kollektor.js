'use strict';

const path = require('path');
const rootDir = path.resolve(__dirname);
const DtsBundleWebpack = require('dts-bundle-webpack');
const TerserPlugin = require('terser-webpack-plugin');


module.exports = (env, options) => {
    return {
        entry: {
            kollektor: './src/index.ts',
            'kollektor.min': './src/index.ts'
        },
        output: {
            library: '_kollektor',
            libraryTarget: 'var',
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/dist'
        },
        resolve: {
            extensions: ['.ts', '.js', '.tsx']
        },
        optimization: {
            minimize: true,
            minimizer: [
                new TerserPlugin({
                    include: /\.min\.js$/,
                    extractComments: false
                })
            ]
        },
        module:{
            rules: [
                {
                    loader: 'ts-loader',
                    test: /\.tsx?$/
                }
            ]
        },
        devServer: {
            port: 8090,
            compress: true,
            contentBase: [
                path.join(__dirname, 'dist'),
                path.join(__dirname, 'static')
            ]
        },
        plugins: [
            ...(options.mode !== 'production' ? [] : [
            new DtsBundleWebpack({
                name: 'kollektor.js',
                main: rootDir + '/dist/types/**/*.d.ts',
                out: rootDir + '/dist/kollektorjs.d.ts',
                removeSource: true
            })])
        ]
    }
}
