const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/renderer/index.tsx',
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html",
        }),
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        port: 3001,
        hot: true,
    },
    mode: 'development',
    target: 'web',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                include: /src/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"],
                        },
                    },
                ],
            },
            {
                test: /\.css$/i,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                            plugins: [
                                "postcss-import",
                                "tailwindcss",
                                "autoprefixer",
                                "postcss-preset-env",
                            ],
                            },
                        },
                    },
                ],
            },
        ],
    },
    resolve: {
        alias: { 'react-dom': '@hot-loader/react-dom'  },
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'renderer/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
