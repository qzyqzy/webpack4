
/* 
    webpack 默认入口文件
    1：运行指令
    webpack ./src/index.js -o ./build/build.js --mode=development
    webpack 入口文件 -o(输出到)  文件地址  开发模式

    webpack ./src/index.js -o ./build/build.js --mode-product
    webpack 入口文件 -o(输出到)  文件地址  生产模式
*/

function add(x, y) {
    return x + y
}

console.log(add(1, 2))

// json 文件直接引入  打包不会报错
import data from './data.json'
console.log(data)


import  './index.css'

// 引入css 时报错

/* 
    You may need an appropriate loader to handle this file type
*/


/*  
    结论
        1. webpack能处理js/json资源，不能处理css/img等其他资源
        2. 生产环境和开发环境将ES6模块化编译成浏览器能识别的模块化~ import
        3. 生产环境比开发环境多一个压缩js代码
*/

