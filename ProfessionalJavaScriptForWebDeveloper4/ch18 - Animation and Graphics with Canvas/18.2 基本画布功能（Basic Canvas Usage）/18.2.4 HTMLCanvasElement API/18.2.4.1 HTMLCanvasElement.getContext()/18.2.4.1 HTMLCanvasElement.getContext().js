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
    // drawRectangle(device, ctxWebGPU, adapter);
  } catch (error) {
    console.error("Error:", error);
  }
})();

function drawRectangle(device, context, adapter) {
  // 定义着色器模块
  const vsModule = device.createShaderModule({
    code: `
      [[builtin(position)]] var<out> Position : vec4<f32>;
      [[stage(vertex)]] fn main() -> void {
          Position = vec4<f32>(vec3<f32>(0.0, 0.0, 0.0), 1.0);
          return;
      }
  `,
  });

  const fsModule = device.createShaderModule({
    code: `
      [[group(0), binding(0)]] var<uniform> uColor : vec4<f32>;

      [[stage(fragment)]] fn main() -> [[location(0)]] vec4<f32> {
          return uColor;
      }
  `,
  });

  // 创建管线
  const pipeline = device.createRenderPipeline({
    layout: "auto",
    vertex: {
      module: vsModule,
      entryPoint: "main",
    },
    fragment: {
      module: fsModule,
      entryPoint: "main",
      targets: [
        {
          format: navigator.gpu.getPreferredCanvasFormat(),
        },
      ],
    },
    primitive: {
      topology: "triangle-list",
    },
  });

  // 创建统一缓冲区
  const uniformBufferSize = 16;
  const uniformBuffer = device.createBuffer({
    size: uniformBufferSize,
    usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST,
  });

  // 绑定组
  const bindGroup = device.createBindGroup({
    layout: pipeline.getBindGroupLayout(0),
    entries: [
      {
        binding: 0,
        resource: { buffer: uniformBuffer },
      },
    ],
  });

  // 更新统一缓冲区数据
  const commandEncoder = device.createCommandEncoder();
  {
    const data = new Float32Array([1.0, 0.0, 0.0, 1.0]);
    commandEncoder.copyBufferToBuffer(
      uniformBuffer,
      0,
      new Uint32Array(data.buffer),
      0,
      data.byteLength
    );
  }

  // 渲染函数
  function render() {
    const commandEncoder = device.createCommandEncoder();
    const renderPassDescriptor = {
      colorAttachments: [
        {
          attachment: context.getCurrentTexture().createView(),
          loadValue: { r: 0.0, g: 0.0, b: 0.0, a: 1.0 },
        },
      ],
    };

    const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
    passEncoder.setPipeline(pipeline);
    passEncoder.setBindGroup(0, bindGroup);
    passEncoder.draw(3, 1, 0, 0);
    passEncoder.end();

    // 提交命令
    device.queue.submit([commandEncoder.finish()]);
  }

  // 开始渲染
  render();
}
