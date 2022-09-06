/**
 * @description  7.3.5.1 generator return.js
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2022-09-06 19:49:33
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

function* range(start, end) {
  while (start < end) {
    yield start;
    start++;
  }
}
const gt = range(1, 8);
console.log(gt);
console.log(gt.next());
console.log(gt.next());
console.log(gt.next());
console.log(gt.return(4));
console.log(gt.return(5));
console.log(gt.next());
console.log(gt.next());
console.log(gt);

const gt2 = range(2, 6);
const [a, b] = gt2;
console.log(gt2);
console.log(gt2.next());

const gt3 = range(3, 8);
for (const item of gt3) {
  console.log(item);
  if (item == 5) {
    break;
  }
}
console.log(gt3);
console.log(gt3.next());

const gt4 = range(3, 8);
for (const item of gt4) {
  console.log(item);
  if (item == 5) {
    gt4.return();
    console.log("后续语句");
  }
}
console.log(gt4);
console.log(gt4.next());
