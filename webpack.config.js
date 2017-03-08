/**
 * Created by Cgrs on 04/03/2017.
 */
/**
 * Iniciar npm:
 * npm init
 *
 * Instalar webpack en el proyecto:
 * npm install -s webpack
 *
 * Instalar webpack de manera global:
 * npm install -g webpack
 *
 * Compilar con webpack:
 * webpack
 */
var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app/src/index.js",
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(mode_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
                }
            }
        ]
    },
    output: {
        path: __dirname + "/app/dist/js/",
        filename: "index.min.js"
    },
    plugins: debug ? [] : [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
        ],
};