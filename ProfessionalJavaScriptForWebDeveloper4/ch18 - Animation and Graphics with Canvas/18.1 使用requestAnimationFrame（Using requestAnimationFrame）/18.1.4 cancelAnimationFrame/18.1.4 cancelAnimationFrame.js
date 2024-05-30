const timer = document.querySelector(".timer");
const startTimer = document.querySelector(".start-pause-continue");
const terminate = document.querySelector(".terminate");
const record = document.querySelector(".record");
const recordList = document.querySelector(".record-list");
/**
 * @type {"no start"|"on pause"|"on clock"}
 */
let currentStatus = "no start"; // no start / on pause / on clock

let timerZero = performance.now(); // 时间零点
let curTimeStamp = 0; // 当前时间，以毫秒为单位
let preTimeStamp = 0; // 暂停后记录的时间，以毫秒为单位

function timeFomate(timeStamp) {
  let ms = String(timeStamp % 1000); // 毫秒
  ms = "0".repeat(3 - ms.length) + ms;
  timeStamp = Math.floor(timeStamp / 1000); // s为单位
  let s = String(timeStamp % 60); // 秒
  s = "0".repeat(2 - s.length) + s;
  timeStamp = Math.floor(timeStamp / 60); // min为单位
  m = String(timeStamp % 60); // 分钟
  m = "0".repeat(2 - m.length) + m;
  timeStamp = Math.floor(timeStamp / 60); // h为单位
  h = String(timeStamp);
  h = "0".repeat(2 - h.length) + h;
  return `${h}:${m}:${s}.${ms}`;
}

function animateTimer() {
  let duration = Math.floor(performance.now() - timerZero + preTimeStamp); // 毫秒为单位
  curTimeStamp = duration;
  timer.textContent = timeFomate(duration);
  requestId = requestAnimationFrame(animateTimer);
}

let requestId = null;

startTimer.addEventListener("click", () => {
  if (currentStatus === "no start") {
    timerZero = performance.now();
    requestId = requestAnimationFrame(animateTimer);
    currentStatus = "on clock";
    startTimer.textContent = "pause";
  } else if (currentStatus === "on clock") {
    cancelAnimationFrame(requestId);
    preTimeStamp = curTimeStamp; // 暂停后记录的时间更换
    startTimer.textContent = "continue";
    currentStatus = "on pause";
  } else if (currentStatus === "on pause") {
    timerZero = performance.now();
    requestId = requestAnimationFrame(animateTimer);
    currentStatus = "on clock";
    startTimer.textContent = "pause";
  }
  console.log("当前状态:", currentStatus);
});

terminate.addEventListener("click", () => {
  currentStatus = "no start";
  cancelAnimationFrame(requestId);
  timer.textContent = "00:00:00.000";
  startTimer.textContent = "start";
  preTimeStamp = 0;
  curTimeStamp = 0;
  recordList.innerHTML = null;
  console.log("当前状态:", currentStatus);
});

record.addEventListener("click", () => {
  if (currentStatus !== "no start") {
    const li = document.createElement("li");
    li.textContent = timeFomate(curTimeStamp);
    if (recordList.childElementCount === 0) {
      recordList.appendChild(li);
    } else {
      const firstEle = recordList.children[0];
      recordList.insertBefore(li, firstEle);
    }
  } else alert("start timer firstly!");
});
