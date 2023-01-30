/*
 * @Author: mangwu                                                             *
 * @File: 16.3.2 NodeIterator.js                                               *
 * @Date: 2023-01-29 23:34:50                                                  *
 * @LastModifiedDate: 2023-01-29 23:44:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const nodeIterator = document.createNodeIterator(document);
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());
console.log(nodeIterator.nextNode());

const treeWorker = document.createTreeWalker(document);
console.log(treeWorker.nextNode());
console.log(treeWorker.nextNode());
console.log(treeWorker.nextNode());


