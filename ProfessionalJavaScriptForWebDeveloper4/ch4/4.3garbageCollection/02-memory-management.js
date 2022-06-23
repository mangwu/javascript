/*
 * @Author: mangwu                                                             *
 * @File: 02-memory-management.js                                              *
 * @Date: 2022-06-21 17:23:16                                                  *
 * @LastModifiedDate: 2022-06-23 16:57:50                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 内存管理
// 全局变量和全局对象的属性如果是不必要的应该解除引用，方法是设置为null

let globalPerson = { name: "mangwu", age: 22 };

function printPerson(person) {
  let localName = person.name;
  let localAge = person.age;
  console.log(`${localName} is ${localAge} years old`);
}
printPerson(globalPerson);
globalPerson = null; // 解除引用

// 多使用const 和let，局部变量在上下文切换后就会被垃圾回收程序回收

// 谷歌浏览器V8引擎，确保相同类型对象共享相同的隐藏类
function Article() {
  this.title = "Computer";
}
let a1 = new Article();
let a2 = new Article();
// 此时a1和a2有相同的隐藏类

a1.author = "Jake";
// a1关联的隐藏类变化，不利于V8读取属性时的优化

// 解决方法：避免先创建再补充的动态属性赋值
class Article {
  constructor(title = "Computer", author = "Jake") {
    this.title = title;
    this.author = author;
  }
}
a1 = new Article();
a2 = new Article("KKK", "Mangwu");
// 两个实例关联相同隐藏类，可以带来潜在的性能提升

// 删除属性不要使用delete，将数值值设置为null即可
a1.title = null;
