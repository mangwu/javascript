const block = document.querySelector(".block");

// 6s
// transform: translateX(0) rotate(0deg) scale(0.6);
// transform: translateX(360px) rotate(360deg) scale(1.5);
//
let flag = true; // 增加
let translateX = 0;
let rotate = 0;
let scale = 0.6;
function getTransform() {
  return `translateX(${translateX}px) rotate(${rotate}deg) scale(${scale})`;
}
block.style.transform = getTransform();
console.log(block.style.transform);

let timer;

// 6s内会变更360次
function modifyTransform() {
  if (flag) {
    translateX += 50 / 36;
    scale += 0.0025;
    rotate++;
  } else {
    translateX -= 50 / 36;
    scale -= 0.0025;
    rotate--;
  }
  if (rotate >= 360) flag = false;
  else if (rotate <= 0) flag = true;
}

setInterval(() => {
  modifyTransform();
  block.style.transform = getTransform();
}, 17); // 17毫秒变更一次
