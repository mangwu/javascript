/*
 * @Author: mangwu                                                             *
 * @File: 06-or-op.js                                                          *
 * @Date: 2022-05-25 20:54:56                                                  *
 * @LastModifiedDate: 2022-05-25 20:56:32                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// - 结论，**任何数**和**其按位非的数**进行**按位或**操作都会得到-1
// - 进一步，任何数和其取负减1后的数进行按位或操作都会得到-1
// 因为32位都是取反后的结果，都是0-1或1-0对，按位或得到0xffffffff
const num = Math.floor(Math.random() * Math.pow(2, 31));

console.log(num, (num | (-num - 1)) == -1);
