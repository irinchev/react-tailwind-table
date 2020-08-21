const path = require("path");
const {merge} = require('webpack-merge');
const {WebpackPluginServe: Serve} = require('webpack-plugin-serve');
const outputPath = path.resolve('./build');
const baseConfig = require('./webpack.config.js');

const options = {
    static: [outputPath, path.resolve('./example')],
    host: "localhost",
    progress: "minimal",
    port: 5555,
    liveReload: true
};

module.exports = merge(baseConfig, {
    mode: "development",
    entry: [
        "./example/js/test-app.js",
        'webpack-plugin-serve/client'
    ],
    output: {
        path: outputPath,
        filename: "bundle.js"
    },
    plugins: [
        new Serve(options)
    ],
    watch: true
});