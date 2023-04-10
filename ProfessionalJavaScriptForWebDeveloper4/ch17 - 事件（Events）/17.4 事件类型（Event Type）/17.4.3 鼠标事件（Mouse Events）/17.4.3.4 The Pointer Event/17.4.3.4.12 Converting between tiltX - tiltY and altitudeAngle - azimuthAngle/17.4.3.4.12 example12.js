/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.12 example12.js                                             *
 * @Date: 2023-04-10 17:36:40                                                  *
 * @LastModifiedDate: 2023-04-10 21:39:16                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
/* Converting between tiltX/tiltY and altitudeAngle/azimuthAngle */

/**
 * @description 将弧度的俯仰角和高度角转换为度数的倾斜角
 * @param {number} altitudeAngle 俯仰角
 * @param {number} azimuthAngle 高度角
 * @returns {{titlX, titlY}}
 */
function spherical2tilt(altitudeAngle, azimuthAngle) {
  const radToDeg = 180 / Math.PI; // 弧度和度的比

  let tiltXrad = 0; // 保存X倾斜角弧度
  let tiltYrad = 0; // 保存Y倾斜角弧度

  // 特殊情况讨论
  if (altitudeAngle == 0) {
    // the pen is in the X-Y plane
    if (azimuthAngle == 0 || azimuthAngle == 2 * Math.PI) {
      // pen is on positive X axis
      tiltXrad = Math.PI / 2;
    }
    if (azimuthAngle == Math.PI / 2) {
      // pen is on positive Y axis
      tiltYrad = Math.PI / 2;
    }
    if (azimuthAngle == Math.PI) {
      // pen is on negative X axis
      tiltXrad = -Math.PI / 2;
    }
    if (azimuthAngle == (3 * Math.PI) / 2) {
      // pen is on negative Y axis
      tiltYrad = -Math.PI / 2;
    }
    if (azimuthAngle > 0 && azimuthAngle < Math.PI / 2) {
      tiltXrad = Math.PI / 2;
      tiltYrad = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI / 2 && azimuthAngle < Math.PI) {
      tiltXrad = -Math.PI / 2;
      tiltYrad = Math.PI / 2;
    }
    if (azimuthAngle > Math.PI && azimuthAngle < (3 * Math.PI) / 2) {
      tiltXrad = -Math.PI / 2;
      tiltYrad = -Math.PI / 2;
    }
    if (azimuthAngle > (3 * Math.PI) / 2 && azimuthAngle < 2 * Math.PI) {
      tiltXrad = Math.PI / 2;
      tiltYrad = -Math.PI / 2;
    }
  }

  if (altitudeAngle != 0) {
    const tanAlt = Math.tan(altitudeAngle);

    tiltXrad = Math.atan(Math.cos(azimuthAngle) / tanAlt);
    tiltYrad = Math.atan(Math.sin(azimuthAngle) / tanAlt);
  }

  return { tiltX: tiltXrad * radToDeg, tiltY: tiltYrad * radToDeg };
}

/**
 * @description 将度数的倾斜角度转换为弧度的俯仰角和高度角
 * @param {number} tiltX X轴倾斜角度
 * @param {number} tiltY Y轴倾斜角度
 * @returns {{altitudeAngle, azimuthAngle}}
 */
function tilt2spherical(tiltX, tiltY) {
  const tiltXrad = (tiltX * Math.PI) / 180; // 获取弧度值
  const tiltYrad = (tiltY * Math.PI) / 180; // 获取弧度值

  // calculate azimuth angle
  let azimuthAngle = 0;

  if (tiltX == 0) {
    if (tiltY > 0) {
      azimuthAngle = Math.PI / 2;
    } else if (tiltY < 0) {
      azimuthAngle = (3 * Math.PI) / 2;
    }
  } else if (tiltY == 0) {
    if (tiltX < 0) {
      azimuthAngle = Math.PI;
    }
  } else if (Math.abs(tiltX) == 90 || Math.abs(tiltY) == 90) {
    // not enough information to calculate azimuth
    azimuthAngle = 0;
  } else {
    // Non-boundary case: neither tiltX nor tiltY is equal to 0 or +-90
    const tanX = Math.tan(tiltXrad);
    const tanY = Math.tan(tiltYrad);

    azimuthAngle = Math.atan2(tanY, tanX);
    if (azimuthAngle < 0) {
      azimuthAngle += 2 * Math.PI;
    }
  }

  // calculate altitude angle
  let altitudeAngle = 0;

  if (Math.abs(tiltX) == 90 || Math.abs(tiltY) == 90) {
    altitudeAngle = 0;
  } else if (tiltX == 0) {
    altitudeAngle = Math.PI / 2 - Math.abs(tiltYrad);
  } else if (tiltY == 0) {
    altitudeAngle = Math.PI / 2 - Math.abs(tiltXrad);
  } else {
    // Non-boundary case: neither tiltX nor tiltY is equal to 0 or +-90
    altitudeAngle = Math.atan(
      1.0 /
        Math.sqrt(
          Math.pow(Math.tan(tiltXrad), 2) + Math.pow(Math.tan(tiltYrad), 2)
        )
    );
  }

  return { altitudeAngle: altitudeAngle, azimuthAngle: azimuthAngle };
}

const div = document.querySelector(".click");
const log = document.querySelector(".log");
div.addEventListener("click", (e) => {
  const { tiltX, tiltY, altitudeAngle, azimuthAngle } = e;
  const { tiltX: tranTiltX, tiltY: tranTiltY } = spherical2tilt(
    altitudeAngle,
    azimuthAngle
  );
  const { altitudeAngle: tranAlitudeAngle, azimuthAngle: tranAzimuthAngle } =
    tilt2spherical(tiltX, tiltY);
  const newDiv = document.createElement("div");
  newDiv.className = "item";
  newDiv.innerHTML = `
  <div class="tag">tiltX:${tiltX.toFixed(2)}</div>
  <div class="tag">tiltY:${tiltY.toFixed(2)}</div>
  <div class="tag">altitudeAngle:${altitudeAngle.toFixed(2)}</div>
  <div class="tag">azimuthAngle:${azimuthAngle.toFixed(2)}</div>
  `;
  const newDiv2 = document.createElement("div");
  newDiv2.className = "item";
  newDiv2.innerHTML = `
  <div class="tag">tiltX:${tranTiltX.toFixed(2)}</div>
  <div class="tag">tiltY:${tranTiltY.toFixed(2)}</div>
  <div class="tag">altitudeAngle:${tranAlitudeAngle.toFixed(2)}</div>
  <div class="tag">azimuthAngle:${tranAzimuthAngle.toFixed(2)}</div>
  `;
  log.appendChild(newDiv);
  log.appendChild(newDiv2);
});
