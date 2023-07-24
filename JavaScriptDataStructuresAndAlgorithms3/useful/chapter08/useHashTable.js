/*
 * @Author: mangwu                                                             *
 * @File: useHashTable.js                                                      *
 * @Date: 2023-07-24 09:00:38                                                  *
 * @LastModifiedDate: 2023-07-24 14:14:25                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const {
  HashTable1,
  HashTable2,
  HashTable3,
  HashTable,
} = require("./HashTable.js");

const hash1 = new HashTable1();
console.log("---------初始化HashTable1--------");
hash1.put("mangwugo", "as8c4as65c1as@163.com");
hash1.put("wumang", "wcas4cas78c@whu.com");
hash1.put("wangwu", "8ascsa8c4asc15@ascg.com");
console.log(hash1.hashCode("mangwugo"), hash1.get("mangwugo"));
console.log(hash1.hashCode("wumang"), hash1.get("wumang"));
console.log(hash1.hashCode("wangwu"), hash1.get("wangwu"));
console.log(hash1);
console.log("---------测试delete方法--------");
console.log("delete mangwugo", hash1.delete("mangwugo"));
console.log(hash1);
/* -------------------------------- */
const hash2 = new HashTable2();
console.log("---------初始化HashTable2--------");
hash2.put("mangwugo", "as8c4as65c1as@163.com");
hash2.put("wumang", "wcas4cas78c@whu.com");
hash2.put("mangwu", "ascgsbhc@whu.com");
hash2.put("wangwu", "8ascsa8c4asc15@ascg.com");
console.log(
  hash2.hashCode("mangwugo"),
  hash2.get("mangwugo"),
  hash2.table[hash2.hashCode("mangwugo")].head
);
console.log(
  hash2.hashCode("wumang"),
  hash2.get("wumang"),
  hash2.table[hash2.hashCode("wumang")].head
);
console.log(
  hash2.hashCode("mangwu"),
  hash2.get("mangwu"),
  hash2.table[hash2.hashCode("mangwu")].head
);
console.log(
  hash2.hashCode("wangwu"),
  hash2.get("wangwu"),
  hash2.table[hash2.hashCode("wangwu")].head
);
console.log("---------测试delete方法--------");
console.log("delete mangwugo", hash2.delete("mangwugo"));
console.log(hash2.table);
console.log("delete mangwu", hash2.delete("mangwu"));
console.log(hash2.table);
console.log("---------测试get和has方法--------");
console.log("has and get mangwu", hash2.has("mangwu"), hash2.get("mangwu"));
console.log("has and get wumang", hash2.has("wumang"), hash2.get("wumang"));
/* -------------------------------- */
const hash3 = new HashTable3();
console.log("---------初始化HashTable3--------");
hash3.put("mangwugo", "as8c4as65c1as@163.com");
hash3.put("wumang", "wcas4cas78c@whu.com");
hash3.put("mangwu", "ascgsbhc@whu.com");
hash3.put("muwang", "8ascsa8c4asc15@ascg.com");
hash3.put("nangwu", "uasc6ascb@81.com");
console.log(hash3.hashCode("mangwugo"), hash3.get("mangwugo"));
console.log(hash3.hashCode("wumang"), hash3.get("wumang"));
console.log(hash3.hashCode("mangwu"), hash3.get("mangwu"));
console.log(hash3.hashCode("muwang"), hash3.get("muwang"));
console.log(hash3);
// console.log("---------测试delete方法--------");
console.log("delete mangwugo", hash3.delete("mangwugo"));
console.log(hash3.table);
console.log("delete mangwu", hash3.delete("mangwu"));
console.log(hash3.table);
console.log("---------测试get方法--------");
console.log("get mangwu", hash3.get("mangwu"));
console.log("get nangwu", hash3.get("nangwu"));
/* -------------------------------- */
const hash = new HashTable();
console.log("---------初始化HashTable4--------");
hash.put("mangwugo", "as8c4as65c1as@163.com");
hash.put("wumang", "wcas4cas78c@whu.com");
hash.put("mangwu", "ascgsbhc@whu.com");
hash.put("muwang", "8ascsa8c4asc15@ascg.com");
hash.put("nangwu", "uasc6ascb@81.com");
console.log("mangwugo", hash.hashCode("mangwugo"), hash.get("mangwugo"));
console.log("wumang", hash.hashCode("wumang"), hash.get("wumang"));
console.log("mangwu", hash.hashCode("mangwu"), hash.get("mangwu"));
console.log("muwang", hash.hashCode("muwang"), hash.get("muwang"));
console.log("nangwu", hash.hashCode("nangwu"), hash.get("nangwu"));
// console.log("---------测试delete方法--------");
console.log("delete mangwugo", hash.delete("mangwugo"));
console.log(hash.table);
console.log("delete mangwu", hash.delete("mangwu"));
console.log(hash.table);
console.log("---------测试get方法--------");
console.log("get mangwu", hash.get("mangwu"));
console.log("get nangwu", hash.get("nangwu"));
