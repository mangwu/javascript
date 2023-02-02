/*
 * @Author: mangwu                                                             *
 * @File: 10.5.1 ES5.1 default parameter values.js                             *
 * @Date: 2022-10-06 19:40:20                                                  *
 * @LastModifiedDate: 2022-10-06 20:36:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// es5.1之中检查传递参数的方式
function sayHello(name) {
  name = typeof name !== "undefined" ? name : "mangwu";
  console.log(`Hello, ${name}`);
}

sayHello();
sayHello("wumang");
sayHello(undefined);

// es6
function sayGreetings(greeting = "Hello") {
  console.log(arguments[0], greeting);
  greeting = "Hi";
  console.log(arguments[0], greeting);
  arguments[0] = "How are you";
  console.log(arguments[0], greeting);

  // console.log(`${greeting}, ${name}`);
}
sayGreetings(undefined, "wumang");
console.log("---------有默认值------------");
function syncNamedArguments(num = "100") {
  console.log(arguments[0], num);
  num = "Hi";
  console.log(arguments[0], num);
  arguments[0] = "How are you";
  console.log(arguments[0], num);
}
syncNamedArguments(undefined);
console.log("---------无默认值------------");
function syncNamedArguments2(num) {
  console.log(arguments[0], num);
  num = "Hi";
  console.log(arguments[0], num);
  arguments[0] = "How are you";
  console.log(arguments[0], num);
}
syncNamedArguments2(undefined);
