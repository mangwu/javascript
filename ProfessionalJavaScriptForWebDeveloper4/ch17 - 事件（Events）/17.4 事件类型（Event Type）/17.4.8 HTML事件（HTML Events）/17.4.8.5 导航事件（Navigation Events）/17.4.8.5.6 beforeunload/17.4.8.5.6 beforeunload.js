const btn = document.querySelector("button");

btn.addEventListener("click", (e) => {
  location = "https://baidu.com";
});

window.addEventListener(
  "beforeunload",
  (e) => {
    e.preventDefault();
    e.returnValue = "";
  },
  { capture: true }
);
