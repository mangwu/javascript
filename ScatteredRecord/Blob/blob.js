/*
 * @Author: mangwu                                                             *
 * @File: blob.js                                                              *
 * @Date: 2024-09-03 17:21:38                                                  *
 * @LastModifiedDate: 2024-09-03 17:24:24                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 通过blob下载文件
 * @param {Blob} blob
 * @param {string} fileName
 */
export function downloadFileByBlob(blob, fileName) {
  let url = URL.createObjectURL(blob);
  const aLink = document.createElement("a");
  aLink.href = url;
  aLink.setAttribute("download", fileName);
  document.body.appendChild(aLink);
  aLink.click();
  document.body.removeChild(aLink);
}
