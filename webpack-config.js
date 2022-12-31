const webpack = require("webpack");
const environment = process.env.NODE_ENV;
const isDevelopment = environment === 'development';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: path.resolve(__dirname, "src/app/app.tsx"),
    mode: process.env.NODE_ENV,
    output: {
        path: '/workspace/dist',
        filename: "[name].js"
    },
    resolve: {
        extensions: ['.Webpack.js', '.web.js', '.ts', '.js', '.jsx', '.tsx', '.css']
    },
    module: {
        rules: [
            {
                test: /\.[jt]sx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            plugins: [isDevelopment && require.resolve('react-refresh/babel')].filter(Boolean),
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                type: 'asset/resource'
            }
        ]
    },
    cache: true,
    watchOptions: {
        poll: true
    },
    plugins: [
        new webpack.DefinePlugin({
            NODE_ENV: environment
        }),
        new HtmlWebpackPlugin({
            title: 'development',
            filename: 'index.html',
            template: '/workspace/index.html',
            minify: false,
            hash: true,
            inject: 'body',
        }),
        isDevelopment && new ReactRefreshWebpackPlugin()
    ].filter(Boolean),
    devServer: {
        host: '0.0.0.0',
        allowedHosts: 'all',
        port: 3000,
        hot: true,
        historyApiFallback: true,
        open: 'http://localhost:8080',
        client: {
            webSocketURL: {
                port: 8080
            }
        }
    },
    // optimization: {
    //     runtimeChunk: "single",
    // },
};
