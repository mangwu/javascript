// let的块作用域
// var的函数作用域

if (true) {
	var name = 'Matt';
	let age = 22;
	console.log(name); // Matt
	console.log(age); // 26
}
console.log(name); // Matt
console.log(age); // RefferenceError： age没有定义