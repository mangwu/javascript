/**
 * @description  8.4.1.1 class definition ways.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-19 09:39:10
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

// 定义类的方式

// 类声明
class Person {}
// 类表达式
const Animal = class {};

// 函数声明可以提升，类声明不能提升
console.log(FunctionExpression);
var FunctionExpression = function () {};
console.log(FunctionExpression);

console.log(FunctionDeclaration);
function FunctionDeclaration() {}
console.log(FunctionDeclaration);

console.log(ClassExpression);
var ClassExpression = class {};
console.log(ClassExpression);

try {
  console.log(ClassDeclaration);
} catch (error) {
  console.log(error.message);
}
class ClassDeclaration {}
console.log(ClassDeclaration);

// 函数声明受函数作用域限制
// 类声明受块作用域限制
{
  function FunctionDeclaration2() {}
  class ClassDeclaration2 {}
}
console.log(FunctionDeclaration2);
try {
  console.log(ClassDeclaration2);
} catch (error) {
  console.log(error.message);
}

function declatation() {
  function FunctionDeclaration3() {}
  class ClassDeclaration3 {}
}
declatation();
try {
  console.log(FunctionDeclaration3);
} catch (error) {
  console.log(error.message);
}
try {
  console.log(ClassDeclaration3);
} catch (error) {
  console.log(error.message);
}
