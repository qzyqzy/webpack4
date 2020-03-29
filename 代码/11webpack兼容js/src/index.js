// 方法2 import '@babel/polyfill'
let add = (x, y) => {
    return x + y
}

let promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve('定时器执行完毕')
    }, 1000);
})

promise.then((res) => {
    console.log(`值为：${res}`)
})
