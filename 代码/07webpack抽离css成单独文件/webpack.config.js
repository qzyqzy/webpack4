

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 不修改配置的情况下 css会被打包到js文件中
// js的体积会变大    css 插入到style标签时会闪屏

const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'js/build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                // css-loader 将css打包到js文件
                // style-loader 创建style标签 将js文件中的样式插入
                // use: ['style-loader', 'css-loader']
                use: [
                    // 去掉style-loader 提取js中的css成单独文件
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/index.css'
        })
    ]

}