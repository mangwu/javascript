/**
 * @description 矩阵链乘积问题
 * @param {number[][]} matrix
 * @returns {number}
 */
function matrixChainMultiplication(matrix) {
  const n = matrix.length;
  const dp = new Array(n + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let j = 2; j <= n; j++) {
    for (let i = j - 1; i >= 1; i--) {
      dp[i][j] = Infinity;
      for (let k = i; k < j; k++) {
        dp[i][j] = Math.min(
          dp[i][j],
          dp[i][k] +
            dp[k + 1][j] +
            matrix[i - 1][0] * matrix[k - 1][1] * matrix[j - 1][1]
        );
      }
    }
  }
  return dp[1][n];
}

console.log(
  matrixChainMultiplication([
    [10, 100],
    [100, 5],
    [5, 50],
    [50, 1],
    [1, 20],
    [20, 40],
    [40, 3],
  ])
);
