/*
 * @Author: mangwu                                                             *
 * @File: 5.2.2 regexp-property.js                                             *
 * @Date: 2022-06-30 17:07:14                                                  *
 * @LastModifiedDate: 2022-06-30 17:20:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 正则表达式实例属性
let pattern1 = /\[bc\]at/i;

console.log(
  "跟标记有关的实例属性",
  pattern1.global,
  pattern1.ignoreCase,
  pattern1.multiline,
  pattern1.unicode,
  pattern1.sticky,
  pattern1.dotAll
);
console.log("跟正则表达式构造有关的实例属性", pattern1.source, pattern1.flags);
console.log("跟正则表达式匹配的开始索引有关的实例属性", pattern1.lastIndex);

let pattern2 = new RegExp("\\[bc\\]at", "i");

console.log(
  "跟标记有关的实例属性",
  pattern2.global,
  pattern2.ignoreCase,
  pattern2.multiline,
  pattern2.unicode,
  pattern2.sticky,
  pattern2.dotAll
);
console.log("跟正则表达式构造有关的实例属性", pattern2.source, pattern2.flags);
console.log("跟正则表达式匹配的开始索引有关的实例属性", pattern2.lastIndex);

