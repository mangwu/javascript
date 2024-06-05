const scrollWrapper = document.querySelector(".scroll-wrapper");

let preTime;

scrollWrapper.addEventListener("scroll", (e) => {
  if (!preTime) preTime = performance.now();
  const time = performance.now();
  console.log(time - preTime);
  preTime = time;
});

