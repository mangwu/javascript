/*
 * @Author: mangwu                                                             *
 * @File: 5.3.0 wrapped-type.js                                                *
 * @Date: 2022-07-04 21:37:48                                                  *
 * @LastModifiedDate: 2022-07-04 22:07:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 包装类型
let s1 = "some text";
let s2 = s1.substring(2);

// 等价于
s1 = new String("some text");
s2 = s1.substring(2);
s1 = null;

// 但是原始值不能添加属性和方法，在调用方法时创建的包装类型实例执行完毕后就被销毁
const s3 = "some text";
s3.color = "red";
console.log(s3.color); // undefined

// Object引用类型可以根据传入的原始值构造对应的包装类型实例
const obj = new Object(25);
console.log(obj instanceof Number);

// 包装类型的构造函数使用new是创建包装类型的实例，而不使用new就是使用同名的转型函数
const a = "25";
let number = Number(a);
console.log(typeof number); // number
let numObj = new Number(a); 
console.log(numObj, typeof numObj);
