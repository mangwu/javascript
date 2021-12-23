let ans = 2;
let b = 100;
setTimeout(() => {
	ans = 25;
}, 1000)
for (let i = 0; i < b; i++) {
	ans+=i;
}
console.log("我是第一个异步加载的脚本")