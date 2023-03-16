/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.2.1 example1.js                                             *
 * @Date: 2023-03-16 16:49:47                                                  *
 * @LastModifiedDate: 2023-03-16 16:55:59                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

let target = document.createElement("div");
// 绑定到指针事件或传统的触摸/鼠标
if (window.PointerEvent) {
  // 如果用户代理支持指针事件，就只监听指针事件
  target.addEventListner("pointerdown", (e) => {
    // 如果有必要，对不同的触摸、触控笔、鼠标等设备，应用基于e.pointerType的独立逻辑
    // ...
  });
  // ...监听其它指针事件
} else {
  // 传统的触摸/鼠标事件处理程序
  target.addEventListener("touchstart", (e) => {
    // 为了兼容鼠标事件的click,调用preventDefault
    e.preventDefault();
  });
  // ..监听鼠标按下事件
  target.addEventListener("mousedown", (e) => {
    // ...
  });
}

// 用于键盘处理的附加事件监听器
