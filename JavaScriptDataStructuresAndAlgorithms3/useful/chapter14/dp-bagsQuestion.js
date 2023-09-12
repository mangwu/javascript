/**
 * @description 背包问题的动态解决方案
 * @param {number} capacity 背包容量
 * @param {number[]} weights 物品重量
 * @param {number[]} values 物品价值
 * @returns {number} 装入背包的物品的最大价值
 */
function knapSack(capacity, weights, values) {
  const n = weights.length;
  const dp = new Array(capacity + 1)
    .fill(0)
    .map(() => new Array(n + 1).fill(0));
  // dp[i][j]表示在容量为i时，使用前j个物品的最大价值
  // 初始状态：dp[0][j]都为0
  // 如不选择当前物品，则价值为dp[i][j-1]，
  // 如果选择当前物品（前提是能装下），则价值为dp[i - w[j]][j-1] + v[j]
  // 所以状态转移方程为 dp[i][j] = max(dp[i][j-1]，dp[i - w[j]][j-1]+v[j])
  for (let i = 1; i <= capacity; i++) {
    for (let j = 1; j <= n; j++) {
      if (i >= weights[j - 1]) {
        dp[i][j] = Math.max(
          dp[i - weights[j - 1]][j - 1] + values[j - 1],
          dp[i][j - 1]
        );
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[capacity][n];
}

console.log(
  knapSack(15, [1, 2, 4, 3, 8, 5, 3, 4, 5], [2, 3, 4, 4, 9, 7, 5, 3, 8])
);
// [1, 2,  4, 3,  8,   5,  3,  4,  5]
// [2, 3,  4, 4,  9,   7,  5,  3,  8]
//  2  1.5 1  1.3 1.12 1.4 1.6 1.3 1.6
