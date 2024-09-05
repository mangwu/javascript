import { blobToDataURL } from "../../../../../ScatteredRecord/Base64/base64.js";
import { downloadFileByBlob } from "../../../../../ScatteredRecord/Blob/blob.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#43ff84";
ctx.fillRect(0, 0, 100, 100);
ctx.fillStyle = "#4096ff";
ctx.fillRect(0, 22, 100, 30);
ctx.fillStyle = "#ffffff";
ctx.font = "bold 13px serif";
ctx.fillText("Hello, World!", 0, 42);
const lowImg = document.querySelector(".low-img");
const midImg = document.querySelector(".mid-img");
const highImg = document.querySelector(".high-img");
function setImgSrc(img, quality) {
  canvas.toBlob(
    (blob) => {
      blobToDataURL(blob).then((res) => {
        img.setAttribute("src", res);
      });
    },
    "image/jpeg",
    quality
  );
}
setImgSrc(lowImg, 0.1);
setImgSrc(midImg, 0.5);
setImgSrc(highImg, 1);

const lowQualityBtn = document.querySelector(".download-low-btn");
const midQualityBtn = document.querySelector(".download-mid-btn");
const highQualityBtn = document.querySelector(".download-high-btn");
lowQualityBtn.addEventListener("click", () => {
  canvas.toBlob(
    (blob) => {
      downloadFileByBlob(blob, "low_quality_" + Date.now() + ".jpg");
    },
    "image/jpeg",
    0.1
  );
});
midQualityBtn.addEventListener("click", () => {
  canvas.toBlob(
    (blob) => {
      downloadFileByBlob(blob, "mid_quality_" + Date.now() + ".jpg");
    },
    "image/jpeg",
    0.5
  );
});
highQualityBtn.addEventListener("click", () => {
  canvas.toBlob(
    (blob) => {
      downloadFileByBlob(blob, "high_quality_" + Date.now() + ".jpg");
    },
    "image/jpeg",
    1.0
  );
});
