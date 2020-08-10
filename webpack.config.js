/**
 * Created by admin on 2018/3/13.
 */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin  = require('mini-css-extract-plugin');
const StableHash = require('./stable-hash');


module.exports = {
    // entry: {
    //   "index": "./src/js/index.js",
    //   "slide": "./src/js/slide.js"
    // },
    entry: "./src/js/index.js",
    mode: 'development',
    output: {
        filename: "./js/[name]-[contenthash:8].js",
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    {loader: MiniCssExtractPlugin.loader},
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: '这是来自于插件的模板',
            filename: 'login.html',
            template: './src/index.html'
        }),
        new CleanWebpackPlugin(),
        // new ExtractTextPlugin('./css/[name]-[hash].css'),
        new MiniCssExtractPlugin({
            //导出文件名，含路径
            filename: '[name]_[chunkhash:8].css',
            //向所有额外的 chunk 提取（默认只提取初始加载模块）
            allChunks: true
        }),
        new webpack.DllReferencePlugin({
            entry: {
                vendor: Object.keys(require('./package.json').dependencies),
            },
            path: 'src/static/vendor',
            name: '[name]_[chunkhash:8]'
        }),
        new StableHash()
    ]
};