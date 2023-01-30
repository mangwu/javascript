/*
 * @Author: mangwu                                                             *
 * @File: treewalker.js                                                        *
 * @Date: 2023-01-30 15:16:15                                                  *
 * @LastModifiedDate: 2023-01-30 15:37:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const treeWalker = document.createTreeWalker(
  document.body,
  NodeFilter.SHOW_ELEMENT,
  {
    acceptNode(node) {
      if (node.nodeName.toLocaleLowerCase() === "p")
        return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    },
  }
);
console.log(
  treeWalker.currentNode,
  treeWalker.nextNode(),
  treeWalker.currentNode
);

console.log(
  treeWalker.currentNode,
  treeWalker.lastChild(),
  treeWalker.currentNode
);
console.log(
  treeWalker.currentNode,
  treeWalker.parentNode(),
  treeWalker.currentNode
);
console.log(
  treeWalker.currentNode,
  treeWalker.nextNode(),
  treeWalker.currentNode
);
console.log(
  treeWalker.currentNode,
  treeWalker.lastChild(),
  treeWalker.currentNode
);

console.log(
  treeWalker.currentNode,
  treeWalker.previousSibling(),
  treeWalker.currentNode
);
console.log(
  treeWalker.currentNode,
  treeWalker.previousSibling(),
  treeWalker.currentNode
);

console.log(
  treeWalker.currentNode,
  treeWalker.previousSibling(),
  treeWalker.currentNode
);
console.log(
  treeWalker.currentNode,
  treeWalker.previousSibling(),
  treeWalker.currentNode
);
