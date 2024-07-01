/*
 * @Author: mangwu                                                             *
 * @File: base64.js                                                            *
 * @Date: 2024-07-01 14:55:33                                                  *
 * @LastModifiedDate: 2024-07-01 17:23:05                                      *
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

// test
const originData1 = "ab";
const originData2 = "这是一条测试数据";
console.log(stringToBinaryString(originData1));
console.log(stringToBinaryString(originData2));
