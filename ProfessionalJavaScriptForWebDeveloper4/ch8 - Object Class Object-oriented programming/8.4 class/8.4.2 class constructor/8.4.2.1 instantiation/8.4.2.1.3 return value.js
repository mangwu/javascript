/*
 * @Author: mangwu                                                             *
 * @File: 8.4.2.1.3 .js                                                        *
 * @Date: 2022-09-19 17:26:25                                                  *
 * @LastModifiedDate: 2022-09-19 17:28:53                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

class Person {
  constructor(name, override) {
    this.name = name;
    if (override) {
      return {
        name,
      };
    }
  }
}
const p1 = new Person("mangwu");
const p2 = new Person("mangwu", true);
console.log(p1);
console.log(p1 instanceof Person);
console.log(p2);
console.log(p2 instanceof Person);
