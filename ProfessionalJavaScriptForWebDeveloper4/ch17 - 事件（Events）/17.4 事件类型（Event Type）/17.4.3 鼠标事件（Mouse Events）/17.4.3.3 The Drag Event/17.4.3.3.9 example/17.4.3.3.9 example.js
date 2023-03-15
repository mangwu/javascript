/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.9 example.js                                                *
 * @Date: 2023-03-15 17:09:32                                                  *
 * @LastModifiedDate: 2023-03-16 00:12:14                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const table = document.querySelector(".table");

const randomId = () => {
  const res = [];
  const astart = "a".charCodeAt();
  const nstart = "0".charCodeAt();
  let idx = 8;
  while (idx) {
    if (Math.random() > 0.27) {
      let a = Math.floor(Math.random() * 26);
      res.push(String.fromCharCode(astart + a));
    } else {
      let n = Math.floor(Math.random() * 10);
      res.push(String.fromCharCode(nstart + n));
    }
    idx--;
  }
  return res.join("");
};

const createEle = (tag) => {
  return document.createElement(tag);
};

const initTable = () => {
  const rows = new Array(10).fill(0).map((_v, i) => {
    const id = randomId();
    const div = createEle("div");
    const divId = createEle("div");
    const divIndex = createEle("div");
    divId.textContent = `ID: ${id}`;
    divIndex.textContent = `初始顺序：${i}`;
    div.appendChild(divId);
    div.appendChild(divIndex);
    div.className = "row dropzone";
    div.draggable = true;
    table.appendChild(div);
    // initListener(div, i);
    return div;
  });
  return rows;
};
let draggedItem = null;
/**
 * @description 添加监听器
 * @param {HTMLElement} ele
 * @param {number} index
 */
const initListener = (ele, index) => {
  const DNDDataType = "text";
  ele.addEventListener("dragstart", (e) => {
    if (e.target.draggable) {
      draggedItem = e.target;
      e.dataTransfer.effectAllowed = "move";
      e.dataTransfer.setData(DNDDataType, index);
    }
  });
  ele.addEventListener("drag", (e) => {
    e.target.style.opacity = 0.8;
    e.target.style.boxShadow = "2px 2px 2px 1px rgba(0, 0, 0, 0.2)";
  });
  ele.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (e.currentTarget.className.indexOf("dropzone") !== -1) {
      e.currentTarget.parentNode.insertBefore(ele, e.currentTarget);
    }
  });
  ele.addEventListener("dragenter", (e) => {
    if (e.target.className.indexOf("dropzone") !== -1) {
      let node = null;
      let idx1 = 0; // 被拖拽元素
      let idx2 = 0; //
      for (let idx = 0; idx < e.target.parentNode.children.length; idx++) {
        if (e.target.parentNode.children[idx] === draggedItem) {
          idx1 = idx;
        } else if (e.target.parentNode.children[idx] === e.target) {
          idx2 = idx;
        }
      }
      if (idx1 > idx2) {
        node = e.target;
      } else {
        node = e.target.nextElementSibling;
      }
      e.target.parentNode.insertBefore(draggedItem, node);
      e.target.style.backgroundColor = "rgb(188, 255, 255)";
    }
  });
  ele.addEventListener("dragleave", (e) => {
    if (
      e.target.className.indexOf("dropzone") !== -1 &&
      e.relatedTarget.parentNode !== e.target
    ) {
      e.target.style.backgroundColor = "white";
    }
  });
  ele.addEventListener("drop", (e) => {
    // if (e.target.className.indexOf("dropzone") !== -1) {
    //   const index = e.dataTransfer.getData(DNDDataType);
    //   const dragedNode = ele.parentNode.children[index];
    //   ele.parentNode.insertBefore(dragedNode, e.target);
    // }
  });
  ele.addEventListener("dragend", (e) => {
    e.target.style.opacity = 1;
    e.target.style.backgroundColor = "white";
    e.target.style.boxShadow = "";
  });
};

const rows = initTable();
rows.forEach((v, i) => initListener(v, i));
