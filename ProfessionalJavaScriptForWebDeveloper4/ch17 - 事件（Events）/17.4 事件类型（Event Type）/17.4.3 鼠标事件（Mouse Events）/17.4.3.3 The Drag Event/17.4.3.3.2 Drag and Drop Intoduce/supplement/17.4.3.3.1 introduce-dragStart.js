/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.1 introduce-dragStart.js                                    *
 * @Date: 2023-03-10 22:41:53                                                  *
 * @LastModifiedDate: 2023-03-11 23:25:03                                      *
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
const div = document.querySelector("div");
ol.addEventListener("dragstart", (e) => {
  if (e.target instanceof HTMLLIElement) {
    // 获取元素的data-value数据
    e.target.style.color = "red";
    let data = 0;
    for (let i = 0; i < ol.children.length; i++) {
      if (ol.children[i] === e.target) {
        data = i;
        break;
      }
    }
    e.dataTransfer.setData(internalDNDType, data);
    e.dataTransfer.effectAllowed = "move"; // 只允许移动
  } else {
    e.preventDefault();
  }
});
ol.addEventListener("dragenter", (e) => {
  const items = e.dataTransfer.items;
  e.target.style.border = "1px solid gray";
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
ol.addEventListener("dragleave", (e) => {
  e.target.style.border = "";
});
const children = ol.children;
for (const child of children) {
  child.addEventListener("drop", (e) => {
    const index = e.dataTransfer.getData(internalDNDType);
    let data = 0;
    for (let i = 0; i < children.length; i++) {
      if (children[i] === child) {
        data = i;
        break;
      }
    }
    const node1 = children[data + 1];
    const node2 = children[index];

    const parentNode = node2.parentNode;
    parentNode.insertBefore(e.target, node2);
    parentNode.insertBefore(node2, node1);
    e.target.style.border = "";
    const record = document.createElement("div");
    record.textContent = `${e.target.dataset.value} ↔ ${node2.dataset.value}`;
    div.appendChild(record);
  });
}

ol.addEventListener("dragend", (e) => {
  if (e.dataTransfer.dropEffect == "move") {
    // console.log(e.target); // 被拖曳的原始元素
    e.target.style.color = "black";
  }
});
