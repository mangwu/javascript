const findBtns = document.querySelectorAll("button");

// 注册点击事件，点击后创建并派发自定义的动物发现事件
findBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    // 触发自定义的发现动物事件
    const findAnimalEvt = createCustomFindAnimalEvent(btn.dataset.type);
    // 派发这个事件
    btn.dispatchEvent(findAnimalEvt);
  });
});

/**
 * @description 创建自定义的动物发现事件
 * @param {string} detail
 * @returns {CustomEvent}
 */
function createCustomFindAnimalEvent(detail = "") {
  const findAnimalEvt = document.createEvent("CustomEvent");
  findAnimalEvt.initCustomEvent("animalfound", true, true, detail);
  return findAnimalEvt;
}

document.body.addEventListener("animalfound", (e) => {
  // 监听动物发现事件
  const animalType = e.detail;
  console.log(e);
  const ul = document.querySelector("ul");
  const li = document.createElement("li");
  li.textContent = animalType;
  ul.appendChild(li);
});

