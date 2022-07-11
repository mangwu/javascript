/*
 * @Author: mangwu                                                             *
 * @File: 5.3.4. Global.js                                                     *
 * @Date: 2022-07-07 23:00:24                                                  *
 * @LastModifiedDate: 2022-07-11 23:53:56                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// Global对象没有实现
try {
  console.log(Global);
} catch (error) {
  console.log("Global未定义");
}

console.log(this);
console.log(global.isFinite(12));

// encodeURI()和encodeURIComponent()

// encodeURI不会对URI中使用的保留字符进行UTF-8编码替换
console.log(
  encodeURI(
    "http://username:password@www.example.com:80/path/to/file.php?foo=316&bar=this+has+spaces#anchor"
  )
);

// 对汉字，空格等进行替换
console.log(
  encodeURI(
    "http://example.com/path/to/illegal value.js?s='非法query'#非法锚点"
  )
);
console.log(
  encodeURI("https://[3ffe:3201:1401:1:280:c8ff:fe4d:db39]:8080/index.html")
);
function fixedEncodeURI(str) {
  return encodeURI(str).replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
console.log(
  fixedEncodeURI(
    "https://[3ffe:3201:1401:1:280:c8ff:fe4d:db39]:8080/index.html"
  )
);
// 非完整高低代理对
console.log(encodeURI("\ud83d\ude00"));
console.log(encodeURI("\ud800\udfff"));
try {
  console.log(encodeURI("\ud800"));
  console.log(encodeURI("\udfff"));
} catch (error) {
  console.log("高低位不完整");
}
// encodeURIComponent()
console.log(
  encodeURIComponent(
    "http://example.com/path/to/illegal value.js?s='非法query'#非法锚点"
  )
);

var set1 = ";,/?:@&=+$"; // 保留字符
var set2 = "-_.!~*'()"; // 不转义字符
var set3 = "#"; // 数字标志
var set4 = "ABC abc 123"; // 字母数字字符和空格

console.log(encodeURI(set1)); // ;,/?:@&=+$
console.log(encodeURI(set2)); // -_.!~*'()
console.log(encodeURI(set3)); // #
console.log(encodeURI(set4)); // ABC%20abc%20123 (空格被编码为 %20)

console.log(encodeURIComponent(set1)); // %3B%2C%2F%3F%3A%40%26%3D%2B%24
console.log(encodeURIComponent(set2)); // -_.!~*'()
console.log(encodeURIComponent(set3)); // %23
console.log(encodeURIComponent(set4)); // ABC%20abc%20123

// decodeURI()
let encodeUrl = encodeURI(
  "http://example.com/path/to/illegal value.js?s='非法query'#非法锚点"
);
let encodeUrlCpn = encodeURIComponent(
  "http://example.com/path/to/illegal value.js?s='非法query'#非法锚点"
);
console.log(decodeURI(encodeUrl));
console.log(decodeURI(encodeUrlCpn));

console.log(decodeURIComponent(encodeUrl));
console.log(decodeURIComponent(encodeUrlCpn));
