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
const ctxWebGPU = canvas4.getContext("webgpu");
console.log(ctxWebGPU);
