const path = require("path");
const outputPath = path.resolve('./dist');

module.exports = {
    entry: [
        "./src/index.js"
    ],
    output: {
        path: outputPath,
        filename: "lib.js"
    },
    resolve: {
        extensions: [".js"],
    },
    mode: "production",
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
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    }
}