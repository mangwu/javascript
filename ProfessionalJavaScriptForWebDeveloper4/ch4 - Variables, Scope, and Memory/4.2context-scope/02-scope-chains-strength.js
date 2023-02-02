/*
 * @Author: mangwu                                                             *
 * @File: 05-.js                                                               *
 * @Date: 2022-06-12 21:18:19                                                  *
 * @LastModifiedDate: 2022-06-13 21:44:36                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 作用域链增强，临时在添加一个新上下文
// 有两种情况在作用域链前端添加一个变量对象

// try catch
// catch语句会创建一个新变量对象，包含错误对象的声明
try {
  console.log(hello);
} catch (err) {
  // 创建一个新变量对象，包含err
  console.log(err.toString());
}

// with语句，将执行对象添加到作用域链的前端，作为临时上下文的变量对象
