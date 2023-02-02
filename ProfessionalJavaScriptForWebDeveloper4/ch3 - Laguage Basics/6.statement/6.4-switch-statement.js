/*
 * @Author: mangwu                                                             *
 * @File: 6.4-switch-statement.js                                              *
 * @Date: 2022-06-07 16:54:44                                                  *
 * @LastModifiedDate: 2022-06-07 17:14:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// swicth语句
// 可枚举的条件语句
let a = 1;
let b = 2;

const threeFolloing = (re) => {
  switch (re) {
    case undefined:
      console.log("未定义输入");
      break;
    case a:
      console.log("A");
      break;
    case 2:
      console.log("B");
      break;
    default:
      console.log("C");
  }
};
threeFolloing(a);
threeFolloing(b);
threeFolloing();
threeFolloing(null);


