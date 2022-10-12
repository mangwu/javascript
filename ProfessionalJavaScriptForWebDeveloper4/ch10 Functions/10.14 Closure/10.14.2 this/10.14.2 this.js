/*
 * @Author: mangwu                                                             *
 * @File: 10.14.2 this.js                                                      *
 * @Date: 2022-10-12 10:40:35                                                  *
 * @LastModifiedDate: 2022-10-12 11:13:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 在闭包中的this让情况变得复杂

globalThis.identity = "The Global Object";

let obj = {
  identity: "My Object",
  createIdentityFunction() {
    return function () {
      return this.identity;
    };
  },
};
console.log(obj.createIdentityFunction()()); // The Global Object

let obj2 = {
  identity: "My Object",
  createIdentityFunction() {
    return () => {
      return this.identity;
    };
  },
};
console.log(obj2.createIdentityFunction()()); // My Object

let obj3 = {
  identity: "My Object",
  createIdentityFunction() {
    let that = this;
    return function () {
      return that.identity;
    };
  },
};
console.log(obj3.createIdentityFunction()()); // My Object
let obj4 = {
  identity: "My Object",
  getIdentity() {
      return this.identity;
  },
};
console.log(obj4.getIdentity());
console.log((obj4.getIdentity)());
console.log((obj4.getIdentity = obj4.getIdentity)());
