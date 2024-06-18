const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

const colorInput = document.querySelector("#canvas-pen-color");
colorInput.addEventListener("change", (e) => {
  context.strokeStyle = e.target.value;
});
const pixelInput = document.querySelector("#canvas-pen-pixel");
pixelInput.addEventListener("change", (e) => {
  context.lineWidth = e.target.value || 1;
});
let drawing = false;
canvas.addEventListener("mousedown", (e) => {
  context.beginPath();
  drawing = true;
  const { offsetX, offsetY } = e;
  context.moveTo(offsetX, offsetY);
});
canvas.addEventListener("mouseout", (e) => {
  // 鼠标离开画布就停止绘画
  if (drawing) context.closePath();
});

canvas.addEventListener("mouseenter", (e) => {
  if (drawing) {
    context.beginPath();
    const { offsetX, offsetY } = e;
    context.moveTo(offsetX, offsetY);
  }
});
canvas.addEventListener("mousemove", (e) => {
  if (drawing) {
    const { offsetX, offsetY } = e;
    context.lineTo(offsetX, offsetY);
    context.stroke();
  }
});

document.addEventListener("mouseup", () => {
  drawing = false;
  context.closePath();
});

const recordBtn = document.querySelector(".record-graph");
const img = document.querySelector("img");
recordBtn.addEventListener("click", () => {
  img.src = canvas.toDataURL();
});

const exportBtn = document.querySelector(".export-graph");
exportBtn.addEventListener("click", () => {
  canvas.toBlob((blob) => {
    let url = URL.createObjectURL(blob);
    const aLink = document.createElement("a");
    aLink.href = url;
    aLink.setAttribute("download", Date.now().toString() + ".png");
    document.body.appendChild(aLink);
    aLink.click();
    document.body.removeChild(aLink);
  }, "image/png");
});
