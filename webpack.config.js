const path = require('path');

module.exports = {
    entry: "./src/index.tsx",
    output: {
        filename: "bundle.js",
        path: __dirname + "/dist"
    },
    devtool: "source-map",
    devServer: {
        contentBase: 'src',
        port: 3000
    },
    resolve: {
        extensions: ["", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        preLoaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
        ],
        loaders: [
            { 
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel',
              query: {
                presets: ['react', 'es2015', "stage-2"]
              }
            }
        ]
    }
};
