/*
 * @Author: mangwu                                                             *
 * @File: 6.7.3 Weak Value.js                                                  *
 * @Date: 2022-09-02 11:03:32                                                  *
 * @LastModifiedDate: 2022-09-02 11:13:43                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const container = {
  value1: { a: 1 },
  value2: { a: 2 },
};
const ws = new WeakSet().add(container.value1).add(container.value2);

function removeRef() {
  // 移除引用
  container.value1 = null;
}

removeRef();

// ws中的value1之后会被垃圾回收，value2外部还有引用，不会被回收
