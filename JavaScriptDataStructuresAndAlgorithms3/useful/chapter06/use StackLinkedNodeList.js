/*
 * @Author: mangwu                                                             *
 * @File: use StackLinkedNodeList.js                                           *
 * @Date: 2023-07-19 16:02:36                                                  *
 * @LastModifiedDate: 2023-07-19 16:19:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const { StackLinkedNodeList } = require("./6.5 StackLinkedNodeList.js");
const stack = new StackLinkedNodeList();
stack.push(1);
console.log(stack.toString(), stack.pop());
stack.push(2, 5);
console.log(stack.toString(), stack.pop());
stack.push(8, 6);
console.log(stack.toString(), stack.pop());
console.log(stack.toString(), stack.peek());
console.log(stack.toString(), stack.pop());
console.log(stack.toString(), stack.size());
console.log(stack.toString(), stack.pop());
console.log(stack.toString(), stack.pop());
