/*
 * @Author: mangwu                                                             *
 * @File: 10.0.2.3 Function.prototype.displayName.js                           *
 * @Date: 2022-10-13 17:05:43                                                  *
 * @LastModifiedDate: 2022-10-14 10:18:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 可选参数，返回函数对象的函数昵称
Function.prototype.displayName = "func";
function foo() {
  console.log(foo.displayName);
}
foo.displayName = "fooFunc";
foo();
console.log(foo);

function foo() {}

function testName(name) {
  foo.displayName = name;
  console.log(foo);
}

testName("$foo$"); // function $foo$()
testName("foo bar"); // function bar()
testName("Foo.prototype.add"); // function add()
testName("foo ."); // function foo .()
testName("foo <"); // function foo <()
testName("foo?"); // function foo?()
testName("foo()"); // function foo()()

testName("[...]"); // function ...()
testName("foo<"); // function foo()
testName("foo..."); // function foo()
testName("foo(^)"); // function foo()
