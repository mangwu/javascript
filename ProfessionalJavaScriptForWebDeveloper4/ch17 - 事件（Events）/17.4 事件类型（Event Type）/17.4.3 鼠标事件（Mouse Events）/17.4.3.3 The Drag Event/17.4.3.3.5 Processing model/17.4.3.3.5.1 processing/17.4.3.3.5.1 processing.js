/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.3.5.1 processing.js                                           *
 * @Date: 2023-03-14 10:27:04                                                  *
 * @LastModifiedDate: 2023-03-14 12:26:54                                      *
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
item.addEventListener("dragstart", (e) => {
  if (e.target instanceof HTMLDivElement) {
    e.dataTransfer.effectAllowed = "move";
    handler(e);
  }
});
item.addEventListener("dragend", (e) => {
  handler(e);
});
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
  if (e.type.indexOf("drag") === -1) {
    console.log(e);
  }
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
  `;
  log.appendChild(li);
}

divs.forEach((v) => {
  v.addEventListener("drag", (e) => {
    handler(e);
  });
  v.addEventListener("dragenter", (e) => {
    console.log(e.target.className);
    if (e.target.className.indexOf("box5") !== -1) {
      return;
    }
    e.preventDefault();
    handler(e);
  });
  v.addEventListener("dragleave", (e) => {
    e.preventDefault();
    handler(e);
  });
  v.addEventListener("dragover", (e) => {
    e.preventDefault();
    // debounceHandler(e);
    handler(e);
  });
  v.addEventListener("dragout", (e) => {
    e.preventDefault();
    // debounceHandler(e);
    handler(e);
  });
  v.addEventListener("drop", (e) => {
    handler(e);
    item.parentNode.removeChild(item);
    e.currentTarget.appendChild(item);
  });
});
