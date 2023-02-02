let age = 22;
if (true) {
	let age =26;
	console.log(age); // 26 优先查找本作用域的标识符变量，没有再查找父作用域的
}
console.log(age); //22 处于父作用域中，不会查找子作用域的变量

var name = "mangwu";

if (true) {
	var name = "wumang"; // 冗余声明，相当于赋值修改name
	console.log(name); // "wumang"
}

function LogName() {
	var name = "manwug";
	console.log(name);
}
LogName();
console.log(name); // "wumang"