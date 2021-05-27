const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm



module.exports = {
    //without babel-polyfill cause error:Babel 6 regeneratorRuntime is not defined wen define async function
    entry: ['babel-polyfill', './src/index.js'],

    devtool: 'inline-source-map',
    devServer: {
        historyApiFallback: true, //makes browser keep components after refresh when using react router
        contentBase: path.join(__dirname, 'dist'),
        hot: true,
        port: 3001,
        //binds to all hosts
        host:"0.0.0.0"
    },

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js',
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: require.resolve("babel-loader"),
            },
            {
                test: /\.txt$/,
                use: 'raw-loader'
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",

                ],
            },

            {
                test: /\.css$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",

                ],
            },

            { test: /\.(ttf|eot|svg|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
            //removed svg from regex , for some reason url-loader brokes svg import
            { test: /\.(png|jpg|jpeg|gif)$/, loader: "url-loader" },
            { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader" },



        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: './src/index.html', minify: false })],

};
