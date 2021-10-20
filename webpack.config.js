const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
    entry: "./src/index.js",
    mode:"development",
    target: "web",
    output:{
        path: path.resolve(__dirname,"build"),
        filename: "index.min-[contenthash].js"
    },
    devtool: "cheap-source-map",
    devServer:{
        port: 3000,
        host: "localhost",
        static: [path.resolve(__dirname,"build")],
        devMiddleware:{
            writeToDisk:true
        }
        
    },
    module: {
        rules:[{
            test:/\.css$/,
            use:["style-loader","css-loader"]
            // use:[MiniCssExtractPlugin.loader,"css-loader"]
        },{
            test:/\.(js|jsx)$/,
            exclude:/node_modules/,
            use:['babel-loader']
        }]
    },
    plugins:[new CleanWebpackPlugin(),new MiniCssExtractPlugin(),new HtmlWebpackPlugin({template:path.resolve(__dirname,"src","index.html")})]
}

