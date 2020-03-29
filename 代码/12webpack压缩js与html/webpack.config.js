const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    // 生产环境下 js 代码自动压缩
    mode: 'production',
    entry: './src/index.js',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build')
    },
    module: {
       
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            // 压缩html代码
            minify:{
               // 折叠空格
               collapseWhitespace:true,
               // 移除注释
               removeComments:true 
            }
        })
    ]

}