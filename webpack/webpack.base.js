const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
    const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const directories = require('../src/directories');
const { VueLoaderPlugin } = require('vue-loader');

const sourceDir = directories.src;
const indexFilePath = './src/index.html';

const webpackConfig = {
    entry: {
        bundle: ['./src/main.js'],
    },
    output: {
        path: path.join(directories.rootDir, 'www'),
        filename: 'bundle.js',
        publicPath: '',
    },
    optimization: {
        minimize: false,
    },
    mode: 'development',
    devtool: '#source-map',
    cache: true,
    module: {
        rules: [
            {
                test: /\.js?$/,
                include: [sourceDir],
                exclude: /(node_modules|\.test\.js)/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env"],
                    babelrc: false,
                    plugins: [
                        'transform-object-rest-spread',
                        'syntax-dynamic-import',
                        '@babel/plugin-syntax-dynamic-import'
                    ],
                },
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.s(a|c)ss$/,
                include: [path.join(sourceDir)],
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },
                    {
                        loader: 'css-loader',
                        options: { url: false },
                    },
                    {
                        loader: 'postcss-loader',
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            includePaths: [sourceDir],
                        },
                    },
                ],
            },
            {
                test: /\.css$/,
                loader: 'css-loader',
            },
            {
                test: /\.(gif|png|jpe?g)$/i,
                use: [
                    'file-loader',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            disable: true,
                        },
                    },
                ],
            },
            {
                test: /\.md$/,
                loader: 'ignore-loader',
            },
            {
                test: /\.svg$/,
                loader: 'vue-svg-loader',
                options: {
                    svgo: {
                        plugins: [{ removeViewBox: false }],
                    },
                },
            },
        ],
    },

    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@src': path.join(sourceDir)
        },
    },

    plugins: [
        new MiniCssExtractPlugin(),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: indexFilePath,
            inject: false,
        }),
    ],

    devServer: {
        overlay: true,
        contentBase: path.join(directories.src, 'www'),
        compress: true,
        host: '0.0.0.0',
        port: 9000,
        stats: 'errors-only',
        open: false,
    },
};

module.exports = webpackConfig;
