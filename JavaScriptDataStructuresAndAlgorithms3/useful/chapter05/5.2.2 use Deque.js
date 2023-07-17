/*
 * @Author: mangwu                                                             *
 * @File: 5.2.2 use Deque.js                                                   *
 * @Date: 2022-11-02 16:34:33                                                  *
 * @LastModifiedDate: 2023-07-17 10:29:29                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用双端队列
const { Deque } = require("./5.2.1 Deque");

const deque = new Deque();
deque.addBack(5, 4, 7);
deque.addFront(9, 8, 2);
console.log(deque.size());
console.log(deque.toString());

console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.removeBack());
console.log(deque.removeBack());
console.log(deque.size());
console.log(deque.removeBack());
console.log(deque.removeFront());
console.log(deque.isEmpty());
console.log(deque);


