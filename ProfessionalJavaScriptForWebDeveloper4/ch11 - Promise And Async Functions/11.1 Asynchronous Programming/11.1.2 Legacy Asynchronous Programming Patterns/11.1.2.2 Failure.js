/*
 * @Author: mangwu                                                             *
 * @File: 11.1.2.1.js                                                          *
 * @Date: 2022-10-20 21:23:12                                                  *
 * @LastModifiedDate: 2022-10-20 21:26:05                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 失败处理
function double(value, success, failure) {
  setTimeout(() => {
    try {
      if (typeof value !== "number") {
        throw "Must provide number as first arguments";
      }
      success(2 * value);
    } catch (error) {
      failure(error);
    }
  }, 1000);
}

const successCallback = (x) => console.log(`Success: ${x}`);
const failureCallback = (e) => console.log(`Failure: ${e}`);

double(3, successCallback, failureCallback);
double("2", successCallback, failureCallback);
