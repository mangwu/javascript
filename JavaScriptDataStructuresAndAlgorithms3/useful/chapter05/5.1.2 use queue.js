/*
 * @Author: mangwu                                                             *
 * @File: 5.1.2 use queue.js                                                   *
 * @Date: 2022-11-02 16:11:11                                                  *
 * @LastModifiedDate: 2022-11-02 16:13:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { Queue } = require("./5.1.1 Queue");

const queue = new Queue();
console.log(queue.isEmpty());

queue.enqueue("a", "c", "e");
queue.enqueue("mangwu");
console.log(queue.dequeue());
console.log(queue.toString());

console.log(queue.size());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());

console.log(queue.isEmpty());

