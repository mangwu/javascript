/*
 * @Author: mangwu                                                             *
 * @File: 12.2.1 location.search.js                                            *
 * @Date: 2022-11-17 23:37:18                                                  *
 * @LastModifiedDate: 2022-11-18 00:24:30                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 解析查询字符串
 * @param {string} search
 */
function getQueryString(search) {
  const queryStrs = search.length > 0 ? search.substring(1).split("&") : [];
  const ans = {};
  queryStrs.forEach((v) => {
    let [key, value] = v.split("=");
    key = decodeURIComponent(key);
    value = decodeURIComponent(value);
    if (key) {
      ans[key] = value;
    }
  });
  return ans;
}
console.log(getQueryString("?age=21&name=%E7%9B%B2%E9%9B%BE&=kk"));
