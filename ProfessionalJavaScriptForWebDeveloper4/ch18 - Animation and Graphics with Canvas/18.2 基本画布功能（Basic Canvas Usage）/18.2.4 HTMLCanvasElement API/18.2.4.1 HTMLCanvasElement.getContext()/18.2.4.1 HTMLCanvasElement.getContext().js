/**
 * @type {HTMLCanvasElement}
 */
const canvas1 = document.querySelector("canvas#canvas1");
const ctx2D = canvas1.getContext("2d");
console.log(ctx2D.getContextAttributes());
console.log(canvas1.getContext("webgl"));
console.log(canvas1.getContext("notmatched"));

/**
 * @type {HTMLCanvasElement}
 */
const canvas2 = document.querySelector("canvas#canvas2");
const ctxWebGL1 = canvas2.getContext("webgl");
console.log(ctxWebGL1.getContextAttributes());

/**
 * @type {HTMLCanvasElement}
 */
const canvas3 = document.querySelector("canvas#canvas3");
const ctxWebGL2 = canvas3.getContext("webgl2");
console.log(ctxWebGL2.getContextAttributes());

/**
 * @type {HTMLCanvasElement}
 */
const canvas4 = document.querySelector("canvas#canvas4");
/**
 * @type {GPUCanvasContext}
 */
const ctxWebGPU = canvas4.getContext("webgpu");
console.log(ctxWebGPU);
// 获取GPUAdapter对象
async function getGPUAdapter() {
  let res = null;
  if ("gpu" in navigator) {
    res = await navigator.gpu.requestAdapter();
  } else {
    throw new Error("WebGPU is not supported in this browser.");
  }
  if (!res) throw new Error("Failed to find a suitable GPU adapter.");
  return res;
}
/**
 * @description 通过GPUAdapter获取GPU设备
 * @param {GPUAdapter} adapter
 * @returns {Promise<GPUDevice>}
 */
async function getGPUDevice(adapter) {
  let res = null;
  if (!adapter) throw new Error("Failed to find a suitable GPU adapter.");
  res = await adapter.requestDevice();
  if (!res) throw new Error("Failed to find a suitable GPU device.");
  return res;
}
(async () => {
  try {
    const adapter = await getGPUAdapter();
    console.log("GPU Adapter:", adapter);
    const device = await getGPUDevice(adapter);
    console.log("GPU Device:", device);
    ctxWebGPU.configure({
      device: device,
      format: navigator.gpu.getPreferredCanvasFormat(),
      aphlaModa: "premultiplied",
    });
    console.log(ctxWebGPU.getCurrentTexture());
  } catch (error) {
    console.error("Error:", error);
  }
})();
