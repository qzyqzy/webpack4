
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
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
                // 语法检查 eslint eslint-loader
                // 设置检查规则
                // 可以放在package.json中
                // eslintConfig：{
                //     "extends"："airbnb-base"
                // }
                // 使用airbnb 需要依赖 eslint-config-airbnb-base  eslint-plugin-import eslint
                test:/\.js$/,
                exclude:/node_modules/,
                loader:'eslint-loader',
                options:{
                    // 字段修复eslint中的问题
                    fix:true
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]

}