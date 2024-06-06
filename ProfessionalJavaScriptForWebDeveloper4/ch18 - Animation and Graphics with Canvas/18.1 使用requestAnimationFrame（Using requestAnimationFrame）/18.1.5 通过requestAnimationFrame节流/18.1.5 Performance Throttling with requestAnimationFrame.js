const scrollWrapper = document.querySelector(".scroll-wrapper");

let preTime;

scrollWrapper.addEventListener("scroll", (e) => {
  const time = performance.now();
  if (preTime) console.log(time - preTime);
  preTime = time;
  setTimeout(() => {
    preTime = null;
  }, 100);
});

const scrollThrottlingWrapper = document.querySelector(
  ".scroll-throttling-wrapper"
);

const sectionWrappers = document.querySelectorAll(".section-wrapper");
let sum = 0;
const sectionLen = [];
for (const sectionWrapper of sectionWrappers) {
  sum += sectionWrapper.clientHeight;
  sectionLen.push(sum);
}
const tocParts = document.querySelectorAll(".toc-part");

let ticking = false; // 表示回调队列是否包含当前帧
let preIdx = 0;
function adjustToc(scrollY, offset = 0) {
  // 偏差值
  tocParts[preIdx].classList.remove("selected");
  let curIdx = 0;
  for (; curIdx < sectionLen.length; curIdx++) {
    if (scrollY + offset < sectionLen[curIdx]) {
      break;
    }
  }
  tocParts[curIdx].classList.add("selected");
  preIdx = curIdx;
}

scrollThrottlingWrapper.addEventListener("scroll", (e) => {
  const scrollY = e.target.scrollTop;
  if (!ticking) {
    requestAnimationFrame(() => {
      adjustToc(scrollY, 40);
      ticking = false;
    });
    ticking = true;
  }
});
