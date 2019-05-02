const HtmlWebpackPlugin = require('html-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    Autoprefixer = require('autoprefixer'),
    webpack = require('webpack'),
    {VueLoaderPlugin} = require('vue-loader');
module.exports = {
    mode: "development",
    entry: {
        js: "./src/index.js",
        vue: "./src/vue.js",
        react: "./src/react.js",
        typescript: "./src/typescript.js",
        vanilla: "./src/vanilla.js"
    },
    output: {
        filename: "[name].[chunkhash].js"
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.html$/,
                use: [{
                    loader: "html-loader",
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.(css|scss)$/,
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    'css-loader?sourceMap',
                    {
                        loader: "postcss-loader",
                        options: {
                            autoprefixer: {
                                browser: ['last 2 versions']
                            },
                            sourceMap: true,
                            plugins: () => [Autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    'sass-loader?outputStyle=compressed&sourceMap',
                ]
            },
            {
                test: /\.(jpe?g|png|gif|webp|svg)$/i,
                use: [
                    'file-loader?name=assets/[name].[ext]',
                    'image-webpack-loader?bypassOnDebug'
                ]
            },
            {
                test: /\.(ttf|eot|wof|woff2?|mp4|mp3|txt|xml|pdf)$/i,
                use: [
                    'file-loader?name=assets/[name].[ext]'
                ]
            },
            {
                test: /\.(vue)$/,
                loader: 'vue-loader'
            },
            {
                test: /\.(tsx?)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'ts-loader'
                }
            }
        ]
    },
    plugins: [
        new webpack.ProgressPlugin((percentage, message) => {
            console.log(`${(percentage * 100).toFixed()}% ${message}`);
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: 'dist/**/*.*'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[chunkhash].css',
            chunkFilename: '[id].css'
        }),
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "index.html",
            chunks: ["js"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "vanilla.html",
            chunks: ["vanilla"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "vue.html",
            chunks: ["vue"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "react.html",
            chunks: ["react"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/template.html",
            filename: "typescript.html",
            chunks: ["typescript"]
        })],
};