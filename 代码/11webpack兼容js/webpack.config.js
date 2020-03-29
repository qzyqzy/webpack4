
// 默认不配置任何信息 打包内容如下
/* 
    eval("let add = (x, y) => {\r\n    return x + y\r\n}\r\n\r\nlet promise = new Promise((resolve) => {\r\n    setTimeout(() => {\r\n        resolve('定时器执行完毕')\r\n    }, 1000);\r\n})\r\n\r\npromise.then((res) => {\r\n    console.log(`值为：${res}`)\r\n})\r\n\n\n//# sourceURL=webpack:///./src/index.js?");
*/

// 方法1处理之后内容为
/* 
    eval("var add = function add(x, y) {\n  return x + y;\n};\n\nvar promise = new Promise(function (resolve) {\n  setTimeout(function () {\n    resolve('定时器执行完毕');\n  }, 1000);\n});\npromise.then(function (res) {\n  console.log(\"\\u503C\\u4E3A\\uFF1A\".concat(res));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

    一些es6语法已经转化、但一些高级语法如promise为转化
*/

/* 方法2处理之后  方法1的文件打包后为5kb 方法2打包之后未440多kb */ 

// eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/polyfill */ \"../node_modules/@babel/polyfill/lib/index.js\");\n/* harmony import */ var _babel_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar add = function add(x, y) {\n  return x + y;\n};\n\nvar promise = new Promise(function (resolve) {\n  setTimeout(function () {\n    resolve('定时器执行完毕');\n  }, 1000);\n});\npromise.then(function (res) {\n  console.log(\"\\u503C\\u4E3A\\uFF1A\".concat(res));\n});\n\n//# sourceURL=webpack:///./src/index.js?");

// 方法3 300kb 按需加载

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
            // js 兼容处理
            // 方法 1 babel-loader @babel/core @babel/preset-env
            // 基本js兼容性处理 --> @babel/preset-env
            // 问题：只能转换基本语法，如promise高级语法不能转换
            // 方法 2 全部js兼容性处理 --> @babel/polyfill 注意 -S
            // 直接在js文件中引入 import '@babel/polyfill'
            // 我只要解决部分兼容性问题，但是将所有兼容性代码全部引入，体积太大了
            // {
            //     test:/\.js$/,
            //     exclude:/node_modules/,
            //     loader:'babel-loader',
            //     options:{
            //         // 预设：指示babel做怎样的兼容处理
            //         presets: ['@babel/preset-env']
            //     }
            // }
            // 方法3 需要做兼容性处理的就做：按需加载  --> core-js
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:'/node_modules/',
                options: {
                    // 预设：指示babel做怎么样的兼容性处理
                    presets: [
                        [
                            '@babel/preset-env',
                            {
                                // 按需加载
                                useBuiltIns: 'usage',
                                // 指定core-js版本
                                corejs: '3'  
                            }
                        ]
                    ]
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