require('babel-polyfill');
require('./style.css');
require('./style.scss');
require('./iconfont.css');
import nameJson from './name.json';
console.log(nameJson)

let add=(x,y)=>{
	return x+y
}
console.log(add(3,4));

let p=new Promise((resolve,reject)=>{
	setTimeout(()=>{
		resolve('end');
	},3000)
})
p.then((val)=>{
	console.log(val)
})