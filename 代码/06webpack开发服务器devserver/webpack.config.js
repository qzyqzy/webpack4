
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
        rules: []
    },
    plugins: [
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ],
    // 开发服务器devserver 用来自动化（可以自动编译、自动打开浏览器、自动刷新）
    // 只会在内存中打包编译、不会有任何输出
    // 安装 webpack-dev-server 运行命令 npx webpack-dev-server
    devServer: {
        // 项目构建后的路径  不配置打开的是项目根目录
        contentBase: resolve(__dirname, 'build'),
        // 启动gzip压缩
        compress: true,
        // 端口号
        port: 8080,
        // 自动打开浏览器
        open: true

    }
}