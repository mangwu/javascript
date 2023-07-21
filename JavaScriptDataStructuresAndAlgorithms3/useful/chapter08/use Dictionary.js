/*
 * @Author: mangwu                                                             *
 * @File: use Dictionary.js                                                    *
 * @Date: 2023-07-21 15:03:04                                                  *
 * @LastModifiedDate: 2023-07-21 15:18:22                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const Dictionary = require("./Dictionary.js");

const dic = new Dictionary();

dic
  .set("mangwu", "1185956753@qq.com")
  .set("John", "asuycgasc@email.com")
  .set("Grandalf", "wfigascuy@163.com");
console.log(dic.toString());
const key = {
  toString() {
    return "mangwu";
  },
};
console.log("has mangwu?", dic.has(key));
console.log("get mangwu:", dic.get(key));
console.log("delete mangwu:", dic.delete(key));
console.log("has mangwu?", dic.has(key));
console.log(dic.toString());
dic
  .set("John", "scasc@email.com")
  .set("Grandalf", "wfiascasgascuy@163.com")
  .set("Kuicagasc", "asc57ascisv@gmail.com")
  .set("Quicager", "vwyvwuisv@gmail.com");
console.log(dic.toString());
console.log("Iterate dic:");
for (const [key, value] of dic) {
  console.log(`${key}:${value}`);
}
