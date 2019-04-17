// webpack.config.js 配置文件
// 运行webpack指令时会加载里面的配置

/* 所有构建工具都是基于node.js平台运行的, 模块化默认采用common.js*/


const { resolve }= require('path')

module.exports={
    // development 开发模式
    // product 生产模式
    mode:'development',

    // 入口文件地址
    entry:'./src/index.js',

    // 输出
    output:{
        // 输出文件名
        filename:'build.js',
        // 输出文件地址
        path:resolve(__dirname,'build')
    },
    // loader 的配置
    module:{
        // 每一种文件类型都必须配置一个loader 不能复用
        rules:[
            {
                // 匹配以css结尾的文件
                test:/\.css$/,
                // 使用哪些loader进行处理
                // loader是有顺序的  从右往左，从下往上执行
                // style-loader 创建style标签，将js中的样式资源插入进行，添加到head中生效
                // css-loader   将css文件变成commonjs模块加载js中，里面内容是样式字符串
                use:[
                    'style-loader',
                    'css-loader'
                ]
            },
            // 处理sass需要安装的依赖为 node-sass  sass-loader 
            {
                test:/\.scss/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            // 处理less需要安装的依赖为 less  less-loader
            {
                test: /\.less/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            }, 
        ]
    },
    // 插件的配置
    plugins:[

    ]

}