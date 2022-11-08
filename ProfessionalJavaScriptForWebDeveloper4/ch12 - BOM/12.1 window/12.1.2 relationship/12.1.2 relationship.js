/*
 * @Author: mangwu                                                             *
 * @File: 12.1.2 relationship.js                                               *
 * @Date: 2022-11-04 14:13:29                                                  *
 * @LastModifiedDate: 2022-11-04 16:37:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 窗口关系

// 打印结果
// ------top的打印开始-------
// top
// top
// top
// top
// true
// true
// true
// true
// ------top的打印结束-------
// ------middle的打印开始-------
// middle
// top
// top
// top
// false
// false
// false
// true
// ------middle的打印开始结束-------
// ------bottom的打印开始-------
// bottom
// middle
// top
// top
// false
// false
// false
// true
// ------bottom的打印开始结束-------

// 打开另一个页面
async function openExample() {
  return await window.open("./another.html");
}
openExample().then((example) => {
  console.log(example);
  setTimeout(() => {
    console.log(example.location);
    // 操作另外一个页面
    if (example) {
      const btn = document.createElement("button");
      btn.textContent = "按钮";
      btn.addEventListener("click", () => alert(this.a));
      example.document.body.append(btn);
    }
  }, 100);
});
