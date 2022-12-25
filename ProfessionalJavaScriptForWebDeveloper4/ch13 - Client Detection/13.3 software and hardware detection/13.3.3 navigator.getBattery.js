/*
 * @Author: mangwu                                                             *
 * @File: 13.3.3 navigator.getBattery.js                                       *
 * @Date: 2022-12-25 21:51:47                                                  *
 * @LastModifiedDate: 2022-12-25 22:07:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

navigator.getBattery().then((b) => console.log(b));

navigator.getBattery().then((battery) => {
  battery.addEventListener("chargingchange", () => {
    console.log("电源接电状态变化");
  });
  battery.addEventListener("chargingtimechange", () => {
    console.log("电源充满时间变化");
  });
  battery.addEventListener("dischargingtimechange", () => {
    console.log("电源电量耗尽时间变化");
  });
  battery.addEventListener("levelchange", () => {
    console.log("电源电量百分比变化");
  });
});
