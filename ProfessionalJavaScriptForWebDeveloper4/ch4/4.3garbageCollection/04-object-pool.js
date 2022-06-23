/*
 * @Author: mangwu                                                             *
 * @File: 04-.js                                                               *
 * @Date: 2022-06-23 23:19:09                                                  *
 * @LastModifiedDate: 2022-06-23 23:26:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 静态分配与对象池子

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  toString() {
    return `(${this.x}, ${this.y})`;
  }
}

const a = new Vector(0, 0);
const b = new Vector(0, 0);

function addVector(a, b) {
  const resV = new Vector();
  resV.x = a.x + b.x;
  resV.y = a.y + b.y;
  console.log(resV.toString());
  return resV;
}

for (let i = 0; i < 20; i++) {
  a.x = i % 8;
  a.y = Math.floor(i ** 2 / ((i % 7) + 1));
  b.x = i;
  b.y = i * 2 + 1;
  addVector(a, b);
}
