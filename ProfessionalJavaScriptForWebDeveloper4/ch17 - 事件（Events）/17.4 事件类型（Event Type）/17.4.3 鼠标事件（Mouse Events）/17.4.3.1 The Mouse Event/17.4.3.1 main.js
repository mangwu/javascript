/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-02-28 10:59:37                                                  *
 * @LastModifiedDate: 2023-02-28 14:28:06                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

const mouseEvent = new MouseEvent("click", {
  screenX: 100,
  buttons: 4,
  modifierAltGraph: true,
});

div.textContent = JSON.stringify(mouseEvent);

div.dispatchEvent(mouseEvent);

const getObjInfo = (obj) => {
  const objMap = new Map(); // 保存对象，避免循环引用
  const res = [["obj"]];
  const explainProps = (q, props, nxtProps, nxtValues, objMap, nxtQueue) => {
    for (const prop of props) {
      let value = null;
      try {
        value = q[prop];
      } catch (error) {
        value = error.message;
      }
      if (typeof value === "object") {
        if (objMap.has(value)) {
          nxtProps.push(prop);
          nxtValues.push(objMap.get(value));
        } else {
          objMap.set(
            value,
            `${prop}(${
              value.__proto__ &&
              value.__proto__.constructor &&
              value.__proto__.constructor.name
            })`
          );
          nxtQueue.push(value);
        }
      } else if (typeof value === "function") {
        nxtProps.push(prop);
        nxtValues.push(`function ${value.name}`);
      } else {
        nxtProps.push(prop);
        nxtValues.push(value);
      }
    }
  };
  const bfs = (obj) => {
    let queue = [obj];
    // 遍历
    while (queue.length) {
      const nxtProps = [];
      const nxtValues = [];
      const nxtQueue = [];
      for (const q of queue) {
        const ownProps = Object.getOwnPropertyNames(q);
        const ownSymbols = Object.getOwnPropertySymbols(q);
        const __proto__ = Object.getPrototypeOf(q);
        explainProps(q, ownProps, nxtProps, nxtValues, objMap, nxtQueue);
        explainProps(q, ownSymbols, nxtProps, nxtValues, objMap, nxtQueue);
        nxtProps.push(
          `__proto__(${
            __proto__ && __proto__.constructor && __proto__.constructor.name
          })`
        );
        nxtValues.push(
          `__proto__(${
            __proto__.__proto__ &&
            __proto__.__proto__.constructor &&
            __proto__.__proto__.constructor.name
          })`
        );
        nxtQueue.push(__proto__);
      }
      res.push(nxtProps, nxtValues);
      queue = nxtQueue;
    }
  };
  try {
    // 尝试遍历对象
    bfs(obj);
    return res;
  } catch (error) {
    return res;
  }
};
let res = getObjInfo(mouseEvent);
const log = document.createElement("div");
res.forEach((v) => {
  const ele = document.createElement("div");
  ele.innerHTML = v
    .map(
      (v) =>
        `<span style="display:inline-block;width:70px;white-space:nowrap;overflow-x:scroll;padding: 2px;border: 1px solid gray;margin: 10px">${v.toString()}</span>`
    )
    .join("");
  log.appendChild(ele);
  ele.style.whiteSpace = "nowrap";
  ele.style.marginTop = "25px";
});
document.body.appendChild(log);

//               obj
//   prop1  prop2           __proto__
// value1    obj2             obj3
//       prop21 __proto__  prop31 __proto__
//
