/*
 * @Author: mangwu                                                             *
 * @File: base64.js                                                            *
 * @Date: 2024-07-01 14:55:33                                                  *
 * @LastModifiedDate: 2024-08-29 17:17:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const base64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

/**
 * @description 将base64编码的字符串数据转换为blob
 * @param {string} base64
 * @param {string} mimeType
 * @returns {Blob}
 */
function base64ToBlob(base64, mimeType) {
  // 将base64编码的字符串转换为二进制数据字符串
  const binaryString = atob(base64);
  const len = binaryString.length;
  const buffer = new ArrayBuffer(len);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < len; i++) {
    view[i] = binaryString.charCodeAt(i);
  }
  return new Blob([view], { type: mimeType });
}

/**
 * @description 将dataURL中的base64提取出来转换为Blob
 * @param {string} dataURL
 * @returns {Blob}
 */
function dataURLToBlob(dataURL) {
  const [preffix, base64] = dataURL.split(",");
  if (preffix.indexOf("base64") === -1)
    throw new Error("dataURL中的数据未经过base64编码");
  // dataSuffix: 'data:' , configs: mimeType charset，base64等
  const configs = preffix.slice(5).split(";");
  let mimeType = "text/plain"; // 默认文本类型
  if (configs.length >= 2) mimeType = configs[0]; // 指定类型
  return base64ToBlob(base64, mimeType);
}

/**
 * @description 将字符串数据转换为字符串二进制数据
 * @param {string} str
 * @returns {string}
 */
function rawStringToBinaryString(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return Array.from(bytes)
    .map((b) => b.toString(2).padStart(8, "0"))
    .join("");
}

/**
 * @description 将只包含01的二进制字符串通过TextDecoder解码成原始字符串
 * @param {string} binaryStr 只包含01的二进制字符串
 * @returns {string}
 */
function binaryStringToRawString(binaryStr) {
  const decoder = new TextDecoder();
  const bytesArr = [];
  const n = binaryStr.length;
  for (let i = 0; i < n; i += 8) {
    bytesArr.push(parseInt(binaryStr.substring(i, i + 8).padEnd(8, "0"), 2));
  }
  return decoder.decode(new Uint8Array(bytesArr));
}

/**
 * @description 将任意字符串数据编码为Base64字符串，包括atob方法不能处理的非ASCII字符串
 * @param {string} str
 * @returns {string}
 */
function stringToBase64(str) {
  const binaryStr = rawStringToBinaryString(str);
  const n = binaryStr.length;
  // 每24位(3个字节)转换为4个64位的进制
  const res = [];
  for (let i = 0; i < n / 24; i++) {
    let start = i * 24;
    let end = Math.min(start + 23, n - 1);
    let curRes = "";
    for (let j = 0; j < (end - start + 1) / 6; j++) {
      let curStart = start + j * 6;
      let curEnd = Math.min(curStart + 5, n - 1);
      const idx = binaryStr.substring(curStart, curEnd + 1).padEnd(6, "0");
      curRes += base64[parseInt(idx, 2)];
    }
    curRes = curRes.padEnd(4, "=");
    res.push(curRes);
  }
  return res.join("");
}

/**
 * @description 将base64编码的字符串解码为原始字符串数据，包含不能处理的非ASCII数据
 * @param {string} base64Str
 * @returns {string}
 */
function base64ToString(base64Str) {
  // 检查传入的base64字符是否合法
  const len = base64Str.length;
  const throwError = () => {
    throw new Error("传入的base64字符不合法");
  };
  if (len % 4 !== 0) throwError();
  const binaryArr = [];
  for (let i = 0; i < len; i++) {
    const idx = base64.indexOf(base64Str[i]);
    if (base64Str[i] === "=") {
      if (i >= len - 2) {
        if (base64Str[len - 1] !== "=") throwError();
      } else throwError();
    } else if (idx === -1) throwError();
    else {
      binaryArr.push(idx.toString(2).padStart(6, 0));
    }
  }
  return binaryStringToRawString(binaryArr.join(""));
}

function test() {
  const testStr = "abc123+-*/";
  console.log("------raw string interconvert binary string------");
  console.log(
    "Raw string: ",
    binaryStringToRawString(rawStringToBinaryString(testStr))
  );
  console.log("Binary string: ", rawStringToBinaryString(testStr));
  console.log("-------------------------------------------------");

  console.log("------btoa and custom stringToBase64 func compare------");
  console.log("testStr:", testStr);
  console.log("stringToBase64:", stringToBase64(testStr));
  console.log("btoa:", btoa(testStr));
  console.log("-------------------------------------------------");
  console.log(
    "------btoa and custom stringToBase64 func compare with none-ascii string-----"
  );
  const noneAsciiTestStr = "你好";
  console.log("testStr:", noneAsciiTestStr);
  console.log("stringToBase64:", stringToBase64(noneAsciiTestStr));
  console.log(
    "btoa use TextEncoder:",
    btoa(
      Array.from(new TextEncoder().encode(noneAsciiTestStr), (v) =>
        String.fromCodePoint(v)
      ).join("")
    )
  );
  console.log("-------------------------------------------------");
  console.log("------atob and custom base64ToString func compare------");
  // 非ASCII字符编码的base64字符串想要转换成utf字符串需要经过TextDecoder的解码
  const base64IncNoneAscii = stringToBase64(noneAsciiTestStr);
  console.log("testStr:", base64IncNoneAscii);
  console.log("base64ToString:", base64ToString(base64IncNoneAscii));
  console.log("atob:", atob(base64IncNoneAscii));
  console.log(
    "atob use TextDecoder:",
    new TextDecoder().decode(
      Uint8Array.from(atob(base64IncNoneAscii), (m) => m.codePointAt(0))
    )
  );
}
test();