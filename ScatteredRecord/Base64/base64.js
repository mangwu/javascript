/*
 * @Author: mangwu                                                             *
 * @File: base64.js                                                            *
 * @Date: 2024-07-01 14:55:33                                                  *
 * @LastModifiedDate: 2024-07-08 17:13:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// function

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
 * @description 将字符串数据转换为字符串二进制数据，例如
 * @param {string} str
 * @returns {string}
 */
function stringToBinaryString(str) {
  const encoder = new TextEncoder();
  const bytes = encoder.encode(str);
  return Array.from(bytes)
    .map((b) => b.toString(2).padStart(8, "0"))
    .join("");
}

const base64 =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function stringToBase64(str) {
  const binaryStr = stringToBinaryString(str);
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
console.log(stringToBase64(base64));
console.log(btoa(base64));

function base64ToBinaryString(base64Str) {
}
