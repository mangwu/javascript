/*
 * @Author: mangwu                                                             *
 * @File: 10.0.1.1 Function().js                                               *
 * @Date: 2022-09-29 10:45:30                                                  *
 * @LastModifiedDate: 2022-10-19 15:41:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Function 构造函数
const sum = new Function(
  "num1,num2",
  `
  try {
    console.log(anoymous)
  } catch(error) {
    console.log(error.toString())
  }
  return num1 + num2`
);

console.log(sum);
console.log(sum(1, 2));

console.log(sum.toString());

function sum2(num1, num2) {
  return num1 + num2;
}
console.log(sum2.toString());

let sum3 = function anonymous(num1, num2) {
  console.log(sum3);
  return num1 + num2;
};
sum3(1, 2);

let sum4 = function (num1, num2) {
  console.log(sum4);
  return num1 + num2;
};
sum4(1, 2);
let sum5 = sum4;
sum4 = "sum4";
sum5(1, 2);

const sum6 = new Function(
  "num1,num2",
  `
  console.log(arguments.callee)
  return num1 + num2
  `
);
sum6(1, 2);

const sum7 = new Function(
  "num1,num2",
  `
return (function anonymous(num1,num2) {
  console.log(anonymous);
  return num1 + num2
})(num1, num2);
`
);
sum7(1, 2);

const fibonacci = new Function(
  "n",
  `
  return (function fibonacci(n) {
    if(n == 1 || n == 2) {
      return 1;
    };
    return fibonacci(n-1) + fibonacci(n-2);
  })(n);
`
);

console.log(fibonacci(30));

// 立即调用
const sumOfArr = new Function(`
  const sumArray = (arr) => arr.reduce((pre, cur) => pre + cur);
  return sumArray
`)();
console.log(sumOfArr([1, 2, -5, 8, 6, 2, 4, -3, -2]));
const sumOfArr2 = eval(`
  const sumArray = (arr) => arr.reduce((pre, cur) => pre + cur);
  sumArray
`);
console.log(sumOfArr2([1, 2, -5, 8, 6, 2, 4, -3, -2]));

const largestNumOfArr = new Function(`
  function largestNumOfArr(arr) {
    return Math.max(...arr);
  }
  return largestNumOfArr;
`);
console.log(
  largestNumOfArr
    .call({})
    .call({}, [78, 25, 36, 87, 41, 25, 96, 34, 54, 24, 13, 39, 64])
);

// 创建的函数对象只能访问全局作用域和自己局部作用域中的变量，不能访问构造函数所在的作用域中的变量

globalThis.x = "global x";

function createFunc(type = "standard") {
  const x = "createFunc scope x";
  if (type == "constructor") {
    // 通过构造函数创建
    return new Function("return x;"); // 引用全局作用域中的x
  } else {
    return function () {
      return x;
    }; // 引用当前作用域中的x，是一个闭包
  }
}

console.log(createFunc()()); // createFunc scope x
console.log(createFunc("constructor")()); // global x
