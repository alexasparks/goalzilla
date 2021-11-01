const path = require('path');

module.exports = {
    entry: './src/renderer/index.tsx',
    mode: 'development',
    target: 'electron-renderer',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
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
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        filename: 'renderer/bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
