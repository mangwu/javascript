/*
 * @Author: mangwu                                                             *
 * @File: 17.4.9.2 deviceorientationabsolute.js                                        *
 * @Date: 2023-10-26 10:43:53                                                  *
 * @LastModifiedDate: 2023-10-26 10:44:37                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */


if (window.DeviceOrientationEvent) {
  window.addEventListener("deviceorientationabsolute", (e) => {
    const { alpha, beta, gamma } = e;
    // 获取指南针航向
    console.log(compassHeading(alpha, beta, gamma));
  });
}

var degtorad = Math.PI / 180; // 度-弧度 转换系数

/**
 * @description 计算指南针的方向，以度为单位
 * @param {number} alpha
 * @param {number} beta
 * @param {number} gamma
 * @returns {number}
 */
function compassHeading(alpha, beta, gamma) {
  var _x = beta ? beta * degtorad : 0; // β 值
  var _y = gamma ? gamma * degtorad : 0; // γ 值
  var _z = alpha ? alpha * degtorad : 0; // α 值
  var cX = Math.cos(_x);
  var cY = Math.cos(_y);
  var cZ = Math.cos(_z);
  var sX = Math.sin(_x);
  var sY = Math.sin(_y);
  var sZ = Math.sin(_z);

  // 计算 Vx 和 Vy 分量
  var Vx = -cZ * sY - sZ * sX * cY;
  var Vy = -sZ * sY + cZ * sX * cY;

  if (Vy === 0 && Vx === 0) return 0;

  // 计算指南针方向
  var compassHeading = Math.atan(Vx / Vy);

  // 将指南针方向转换为使用整个单位圆的格式
  if (Vy < 0) {
    compassHeading += Math.PI;
  } else if (Vx < 0) {
    compassHeading += 2 * Math.PI;
  }

  return compassHeading * (180 / Math.PI); // 指南针方向 (度单位)
}
