import { dataURLToBlob } from "../../../../../ScatteredRecord/Base64/base64.js";
import { downloadFileByBlob } from "../../../../../ScatteredRecord/Blob/blob.js";

const canvas1 = document.querySelector("canvas#canvas1");
const ctx = canvas1.getContext("2d");
ctx.fillStyle = "#43ff84";
ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = "#4096ff";
ctx.fillRect(0, 22, 100, 30);
ctx.fillStyle = "#ffffff";
ctx.font = "bold 13px serif";
ctx.fillText("Hello, World!", 0, 42);
var fullQuality = canvas1.toDataURL("image/jpeg", 1.0);
var mediumQuality = canvas1.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas1.toDataURL("image/jpeg", 0.1);
const lowImg = document.querySelector(".low-img");
const midImg = document.querySelector(".mid-img");
const highImg = document.querySelector(".high-img");
lowImg.setAttribute("src", lowQuality);
midImg.setAttribute("src", mediumQuality);
highImg.setAttribute("src", fullQuality);
console.log("fullQuality", fullQuality, fullQuality.length);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSU...AA/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8AP/B//9k= 1035
console.log("mediumQuality", mediumQuality, mediumQuality.length);
console.log("lowQuality", lowQuality, lowQuality.length);
console.log("fullQuality === lowQuality", fullQuality === lowQuality);
// downloadFileByBlob(dataURLToBlob(fullQuality), "test.jpeg");
const lowQualityBtn = document.querySelector(".download-low-btn");
const midQualityBtn = document.querySelector(".download-mid-btn");
const highQualityBtn = document.querySelector(".download-high-btn");
lowQualityBtn.addEventListener("click", () => {
  downloadFileByBlob(
    dataURLToBlob(lowQuality),
    "low_quality_" + Date.now() + ".jpg"
  );
});
midQualityBtn.addEventListener("click", () => {
  downloadFileByBlob(
    dataURLToBlob(mediumQuality),
    "mid_quality_" + Date.now() + ".jpg"
  );
});
highQualityBtn.addEventListener("click", () => {
  downloadFileByBlob(
    dataURLToBlob(fullQuality),
    "high_quality_" + Date.now() + ".jpg"
  );
});
