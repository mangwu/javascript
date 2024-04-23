const myDiv = document.getElementById("myDiv");

const btn = document.querySelector("button");

btn.onclick = function () {
  // 不好的行为，btn是myDiv的内部元素，被替换后自身注册的事件处理器会遗留在内存中
  myDiv.innerHTML = "Process...";
};
