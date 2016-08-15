var path = require('path');
var webpack = require('webpack');

var nodeModulesDir = path.join(__dirname, 'node_modules');

module.exports = {
    devtool: 'eval-source-map',
    entry : {
        app : './entry/app.js',
        vendor : ['react', 'react-dom', 'react-router']
    },
    output : {
        path : './assets/',
        filename : '[name].bundle.js',
        chunkFilename : 'chunk/[chunkhash].chunk.js',
        publicPath : './assets/'
    },
    module : {
        loaders : [
            { test : /\.js$/, loader : 'babel' },
            { test : /\.css$/, loader : 'style!css' },
        ]
    },
    resolve : {
        extensions: ["", ".webpack.js", ".web.js", ".js", ".less"]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js"),
        // new webpack.optimize.UglifyJsPlugin({
        //     sourceMap: false,
        //     mangle: false
        // })
    ]
};
