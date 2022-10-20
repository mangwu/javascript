/*
 * @Author: mangwu                                                             *
 * @File: 11.1.2.3 Nested Callback.js                                          *
 * @Date: 2022-10-20 21:48:21                                                  *
 * @LastModifiedDate: 2022-10-20 21:53:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 嵌套异步回调
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== "number") {
        throw "Must provide number as first argument";
      }
      success(2 * value);
    } catch (error) {
      failure(error);
    }
  }, 1000);
}

const successCallback = (x) => {
  double(x, (y) => console.log(`Success: ${y}`));
};

const failureCallback = (e) => console.log(`Failure: ${e}`);
double(3, successCallback, failureCallback);
