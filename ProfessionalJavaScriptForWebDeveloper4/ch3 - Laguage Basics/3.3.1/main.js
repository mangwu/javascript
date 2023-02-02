// var 的声明提升
function foo () {
	console.log(age);
	var age = 26;
}
foo(); //undefined 不会报错

// var的重复声明
function foo2 () {
	var age = 36;
	var age = 26;
	var age;
	console.log(age);
}
foo2(); // 26