/*
 * @Author: mangwu                                                             *
 * @File: 02-.js                                                               *
 * @Date: 2022-05-24 15:59:17                                                  *
 * @LastModifiedDate: 2022-05-24 16:03:08                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 对非数值类型进行类型转换
console.log(+null);
console.log(+undefined);
console.log(-"123");
console.log(-"a123");
console.log(
  +{
    valueOf() {
      return "3";
    },
  }
);
console.log(+true);
