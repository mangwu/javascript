/*
 * @Author: mangwu                                                             *
 * @File: 04-.js                                                               *
 * @Date: 2022-06-23 23:19:09                                                  *
 * @LastModifiedDate: 2022-06-24 15:42:52                                      *
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
  // console.log(resV.toString());
  return resV;
}

for (let i = 0; i < 20; i++) {
  a.x = i % 8;
  a.y = Math.floor(i ** 2 / ((i % 7) + 1));
  b.x = i;
  b.y = i * 2 + 1;
  addVector(a, b);
}

function addVector2(a, b, resV) {
  resV.x = a.x + b.x;
  resV.y = a.y + b.y;
  // console.log(resV.toString());
  return resV;
}
/**
 * @class VectorPool
 */
class VectorPool {
  /**
   * @description 构造函数
   */
  constructor() {
    // 使用循环队列管理对象池
    this.vectorList = new Array(30).fill(null);
    this.low = 0; // 指向队首
    this.high = 0; // 指向队尾
    this.cur = 0;
    this.createNum = 0;
  }
  /**
   * @description 从对象池中捞取对象
   * @returns {Vector|Boolean}
   */
  allocate() {
    // 队首出队，如果没有就新建一个
    if (this.cur == 0) {
      if (this.createNum < 30) {
        // 容量判断
        this.createNum++;
        return new Vector();
      } else {
        console.log("超出创建容量");
        return false;
      }
    } else {
      this.cur--;
      // 返回队首对象
      let ans = this.vectorList[this.low];
      this.vectorList[this.low] = null;
      // 注意数组容量
      this.low++;
      this.low = this.low % 30;
      return ans;
    }
  }
  /**
   * @description 回收矢量对象
   * @param {Vector} v 矢量对象
   * @returns {Boolean}
   */
  free(v) {
    if (this.cur == 30) {
      return false;
    }
    this.cur++;
    this.vectorList[this.high] = v;
    this.high++;
    this.high = this.high % 30;
    return true;
  }
}

const vp = new VectorPool();
let vectorList = [];
for (let i = 0; i < 20; i++) {
  a.x = i % 8;
  a.y = Math.floor(i ** 2 / ((i % 7) + 1));
  b.x = i;
  b.y = i * 2 + 1;
  const resV = vp.allocate();
  const resV2 = vp.allocate();
  addVector2(a, b, resV);
  addVector2(b, a, resV2);
  vectorList.push(resV, resV2);
  if (i % 6 == 1) {
    for (const res of vectorList) {
      vp.free(res);
    }
    vectorList = [];
  }
  console.log(vp.cur);
}
