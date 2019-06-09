var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
//const HotModuleReplacementPlugin = require("webpack-hot-middleware");

module.exports = {
    entry: "./src/index.tsx",
    output: {
        //filename: "bundle.js",
        filename: 'bundle.js',
        path: path.join(__dirname, './dist'),
        publicPath: '/',
    },
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    devServer: {
        contentBase: [
              path.resolve(__dirname, "dist"),
              path.resolve(__dirname, "node_modules")
            ],
        historyApiFallback: true,
        compress: true,
        watchContentBase: true,
        port: 9000,
        open: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            // Load a custom template (lodash by default see the FAQ for details
            template: 'index.html',
            hash: true
        }),
    ],
    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: [
          path.join(__dirname, 'node_modules'),
      ],
    },

    module: {
        rules: [
            { test: /\.tsx?$/, use: ["ts-loader"], exclude: /node_modules/ }
        ],
        unknownContextCritical : false
    },

    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
    },
};
