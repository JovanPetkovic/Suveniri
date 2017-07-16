var debug = process.env.NODE_ENV !== "production";
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');
module.exports = {
    entry: "./src/gallery/js/entry.js",
    output: {
        path: __dirname + "/dist/gallery",
        filename: "main.js"
    },
    module: {
        rules: [
            {
                test: /\.sass$/,
                use: ExtractTextPlugin.extract({
                    fallback:"style-loader",
                    use: ["css-loader","sass-loader"]
                })
            },
            {
                test: /\.pug/,
                loaders: ['html-loader','pug-html-loader']
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use:
                [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
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
            template: './src/gallery/index.pug',
            filename: 'index.html'
        })
    ]
};
