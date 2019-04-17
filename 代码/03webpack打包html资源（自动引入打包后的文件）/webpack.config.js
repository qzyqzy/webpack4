

/* 
  loader  1、下载  2、使用
  plugin  1、下载  2、引用  3、使用
*/

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
        rules: [

        ]
    },
    plugins: [
        // html-webpack-plugin
        // 默认会创建一个空的html、自动引入打包之后的资源
        // new HtmlWebpackPlugin()

        // 可以指定复制的模板
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}
