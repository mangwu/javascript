/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.1 introduce-dragStart.js                                    *
 * @Date: 2023-03-10 22:41:53                                                  *
 * @LastModifiedDate: 2023-03-11 18:42:47                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const internalDNDType = "text"; // 指定数据类型
const ol = document.querySelector("ol");
ol.addEventListener("dragstart", (e) => {
  if (e.target instanceof HTMLLIElement) {
    // 获取元素的data-value数据
    e.dataTransfer.setData(internalDNDType, e.target.dataset.value);
    e.dataTransfer.effectAllowed = "move"; // 只允许移动
  } else {
    e.preventDefault();
  }
});
ol.addEventListener("dragenter", (e) => {
  const items = e.dataTransfer.items;
  for (let i = 0; i < items.length; i++) {
    const item = items[i];
    if (item.kind === "string" && item.type === internalDNDType) {
      e.preventDefault();
      return;
    }
  }
});
ol.addEventListener("dragover", (e) => {
  e.dataTransfer.dropEffect = "move";
  e.preventDefault();
});
ol.addEventListener("drop", (e) => {
  const li = document.createElement("li");
  const data = e.dataTransfer.getData(internalDNDType);
  if (data === "fruit-apple") {
    li.textContent = "Apples";
  } else if (data === "fruit-orange") {
    li.textContent = "Oranges";
  } else if (data === "fruit-pear") {
    li.textContent = "Pears";
  } else {
    li.textContent = "Unknown Fruit";
  }
  e.currentTarget.appendChild(li);
});

ol.addEventListener("dragend", (e) => {
  if (e.dataTransfer.dropEffect == "move") {
    e.target.parentNode.removeChild(e.target);
  }
});

