var debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: "./src/index/js/entry.js",
    output: {
        path: __dirname + "/dist",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                exclude: /(node_modules|bower_components)/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test: /\.pug/,
                exclude: /(node_modules|bower_components)/,
                loaders: ['html-loader','pug-html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg|ico)$/i,
                exclude: /(node_modules|bower_components)/,
                use:
                [
                    'file-loader?name=images/[name].[ext]',
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            query: {
                                mozjpeg: {
                                    progressive: true,
                                },
                                gifsicle: {
                                    interlaced: true,
                                },
                                optipng: {
                                    optimizationLevel: 7,
                                }
                            }
                        }
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use:
                {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                exclude: /(node_modules|bower_components)/,
                use: 
                {
                    loader: 'file-loader',
                    options: {
                        name: 'fonts/[name].[ext]'
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 3000,
        stats: 'errors-only'
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index/index.pug',
            filename: 'index.html'
        })
    ]
};
