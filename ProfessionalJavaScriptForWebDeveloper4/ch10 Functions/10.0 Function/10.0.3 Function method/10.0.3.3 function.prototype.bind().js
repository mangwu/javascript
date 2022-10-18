/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.3 function.prototype.bind().js                                *
 * @Date: 2022-10-18 17:34:42                                                  *
 * @LastModifiedDate: 2022-10-18 17:37:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 逻辑上等价
function func() {
  console.log(arguments);
}

const boundFn1 = func.bind(null, 1, 2);
const boundFn2 = (...rest) => func.call(null, 1, 2, ...rest);

boundFn1(3,4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }
boundFn2(3,4); // [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4 }

