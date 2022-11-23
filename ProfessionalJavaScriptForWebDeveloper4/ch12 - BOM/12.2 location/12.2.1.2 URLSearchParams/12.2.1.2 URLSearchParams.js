/*
 * @Author: mangwu                                                             *
 * @File: 12.2.2.1 URLSeachParams.js                                           *
 * @Date: 2022-11-18 16:19:14                                                  *
 * @LastModifiedDate: 2022-11-19 19:21:38                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const urlsp = new URLSearchParams(
  `?age=21&name=mangwu&name=${encodeURIComponent("盲雾")}&=k&1=`
);
console.log(urlsp.getAll("age"));
console.log(urlsp.getAll("name"));
console.log(urlsp.get(""));
console.log(urlsp.get("1"));
console.log(urlsp.get("age"));
console.log(urlsp.get("name"));

console.log(urlsp.has("age")); // true
urlsp.delete("age");
console.log(urlsp.get("age"));
console.log(urlsp.has("age")); // false

urlsp.append("name", "wumang");
console.log(urlsp.getAll("name"));

urlsp.set("name", encodeURIComponent("盲雾"));
console.log(urlsp.getAll("name"));

console.log(urlsp.toString());
console.log("----------------");
const urlsps = new URLSearchParams(
  `?age=21&name=mangwu&name=${encodeURIComponent("盲雾")}&=k&1=`
);

for (const [key, value] of urlsps) {
  console.log(key, value);
}
for (const key of urlsps.keys()) {
  console.log(key);
}
for (const value of urlsps.values()) {
  console.log(value);
}

urlsps.sort();
console.log(urlsps);
console.log(urlsps.toString());
