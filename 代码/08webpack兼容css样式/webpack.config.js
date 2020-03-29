

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

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
                use: [
                    MiniCssExtractPlugin.loader,
                    // 这种写法是使用loader的默认配置 如果想设置参数的话就使用下面这种写法
                    'css-loader',
                    // css兼容处理 poctcss
                    // postcss-loader postcss-preset-env
                    // postcss-preset-env 的作用
                    // 帮助postcss 找到package.json中的 browserslist里面的配置 加载指定的css兼容样式
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                // postcss的插件
                                require('postcss-preset-env')()
                            ]
                        }
                    }
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