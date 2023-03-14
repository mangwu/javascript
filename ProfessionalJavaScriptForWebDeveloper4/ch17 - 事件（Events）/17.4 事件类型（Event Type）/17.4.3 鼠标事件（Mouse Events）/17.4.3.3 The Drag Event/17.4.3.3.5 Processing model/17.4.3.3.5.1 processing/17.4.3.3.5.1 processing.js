/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.5.1 processing.js                                           *
 * @Date: 2023-03-14 10:27:04                                                  *
 * @LastModifiedDate: 2023-03-14 22:01:28                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const divs = document.querySelectorAll(".box");
const item = document.querySelector(".item");
const log = document.querySelector(".log");
const img = document.createElement("img");
img.src = "./iconfont-logo.svg";

function debounce(func, delay = 100) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const debounceHandler = debounce((e) => {
  handler(e);
});

function handler(e) {
  const li = document.createElement("li");
  li.className = "log-li";
  li.innerHTML = `<span class="type">${e.type}</span>
  <span class="target">${e.target && e.target.className}</span>
  <span class="currentTarget">${
    e.currentTarget && e.currentTarget.className
  }</span>
  <span class="base">${e.detail}</span>
  <span class="base">${e.screenX}/${e.screenY}</span>
  <span class="base">${e.clientX}/${e.clientY}</span>
  <span class="base">${e.ctrlKey}</span>  
  <span class="base">${e.button}</span>
  <span class="base">${e.buttons}</span>
  <span class="relatedTarget">${
    e.relatedTarget && e.relatedTarget.className
  }</span>
  <span class="relatedTarget">${
    e.dataTransfer && e.dataTransfer.effectAllowed
  }</span>
  <span class="relatedTarget">${
    e.dataTransfer && e.dataTransfer.dropEffect
  }</span>
  `;
  log.appendChild(li);
}
const internalDNDType = "text"; // 指定数据类型
item.addEventListener("drag", (e) => {
  e.preventDefault(); // 会设置当前拖动操作为none
  e.target.style.opacity = 0.5;
  handler(e); // 开始拖动后，在源节点上第一个激发的拖动事件
});
divs.forEach((v, i) => {
  v.addEventListener("dragstart", (e) => {
    if (e.target instanceof HTMLDivElement && e.target.className === "item") {
      e.dataTransfer.effectAllowed = "move"; // 设置允许的拖拽操作
      e.dataTransfer.setDragImage(img, 40, 40); // 设置UI反馈
      e.dataTransfer.setData(internalDNDType, i); // 索引
      handler(e);
    } else {
      e.preventDefault(); // 对不是item的div元素直接取消拖拽操作
    }
  });
  v.addEventListener("drag", (e) => {
    e.preventDefault();
  });
  v.addEventListener("dragenter", (e) => {
    handler(e);
    // 对进入元素进行样式修改
    e.preventDefault();
    if (e.target === v) {
      e.target.style.backgroundColor = "red";
    }
  });
  v.addEventListener("dragleave", (e) => {
    handler(e);
    // 对离开元素进行样式修改
    if (e.target === v && e.relatedTarget !== item) {
      e.target.style.backgroundColor = "rgb(231, 116, 116)";
    }
  });
  v.addEventListener("dragover", (e) => {
    e.dataTransfer.dropEffect = "move";
    e.preventDefault(); // prevent default to allow drop
    handler(e);
  });
  v.addEventListener("drop", (e) => {
    handler(e);
    // prevent default action (open as link for some elements)
    e.preventDefault();
    if (e.currentTarget.dataset.dropzone === "true") {
      const index = item.parentNode.removeChild(item);
      e.currentTarget.appendChild(item);
    }
  });
  v.addEventListener("dragend", (e) => {
    if (e.dataTransfer.dropEffect === "move") {
      e.currentTarget.style.backgroundColor = "rgb(231, 116, 116)";
      handler(e);
      e.target.style.opacity = 1;
    }
  });
});
item.addEventListener("pointercancel", (e) => {
  handler(e);
});

document.body.addEventListener("dragenter", (e) => {
  handler(e);
});

const test = document.querySelector(".test");
test.addEventListener("dragenter", handler);
