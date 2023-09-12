// 给你一个整数数组 coins 表示不同面额的硬币，另给一个整数 amount 表示总金额。

// 请你计算并返回可以凑成总金额的硬币组合数。如果任何硬币组合都无法凑出总金额，返回 0 。

// 假设每一种面额的硬币有无限个。

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const n = coins.length;
  const cache = new Array(amount + 1).fill(-1).map(() => new Array(n).fill(-1));
  coins.sort((a, b) => b - a);
  const dfs = (rest, start) => {
    if (cache[rest][start] !== -1) return cache[rest][start];
    if (rest === 0) return 1;
    let res = 0;
    for (let i = start; i < n; i++) {
      if (coins[i] > rest) {
        continue;
      } else {
        res += dfs(rest - coins[i], i);
      }
    }
    cache[rest][start] = res;
    return res;
  };
  return dfs(amount, 0);
};

/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function (amount, coins) {
  const dp = new Array(amount + 1).fill(0);
  dp[0] = 1;
  for (const coin of coins) {
    for (let i = coin; i <= amount; i++) {
      dp[i] += dp[i - coin];
    }
  }
  return dp[amount];
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const n = coins.length;
  const cache = new Array(amount + 1).fill(-1);
  coins.sort((a, b) => b - a);
  const dfs = (rest) => {
    if (rest === 0) return 0;
    if (rest < 0) return Infinity;
    if (cache[rest] !== -1) return cache[rest];
    let res = Infinity;
    for (let i = 0; i < n; i++) {
      if (coins[i] <= rest) {
        const newMin = dfs(rest - coins[i]);
        res = Math.min(res, 1 + newMin);
      }
    }
    cache[rest] = res;
    return res;
  };
  const ans = dfs(amount, 0);
  return ans === Infinity ? -1 : ans;
};

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  const dp = new Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (coin <= i) {
        dp[i] = Math.min(dp[i - coin] + 1, dp[i]);
      }
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
