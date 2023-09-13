/**
 * @description 分数背包问题
 * @param {number} capacity
 * @param {number[]} weights
 * @param {number} values
 * @returns {number}
 */
function fractinalKnapsack(capacity, weights, values) {
  const n = weights.length;
  const idxes = new Array(n)
    .fill(0)
    .map((_v, i) => i)
    .sort((a, b) => values[b] / weights[b] - values[a] / weights[a]);
  let res = 0;
  for (const idx of idxes) {
    const w = weights[idx];
    const v = values[idx];
    if (w <= capacity) {
      res += v;
      capacity -= w;
    } else {
      res += (v * capacity) / w;
      break;
    }
  }
  return res;
}
console.log(fractinalKnapsack(15, [3, 4, 6, 7, 4], [4, 5, 6, 9, 6]));
