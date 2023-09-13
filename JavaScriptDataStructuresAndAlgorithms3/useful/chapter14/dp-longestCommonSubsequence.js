/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  // dp[i][j]
  // 如果text1[i-1] === text2[j-1]则有一个答案：dp[i-1][j-1] + 1
  // 否则就是max(dp[i-1][j], dp[i][j-1])
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = Math.max(dp[i][j], dp[i - 1][j - 1] + 1);
      }
    }
  }
  return dp[m][n];
};

/**
 * @param {string} text1
 * @param {string} text2
 * @return {string}
 */
var longestCommonSubsequence = function (text1, text2) {
  const m = text1.length;
  const n = text2.length;
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(""));
  // dp[i][j]
  // 如果text1[i-1] === text2[j-1]则有一个答案：dp[i-1][j-1] + 1
  // 否则就是max(dp[i-1][j], dp[i][j-1])
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + text1[i - 1];
      } else if (dp[i - 1][j].length > dp[i][j - 1].length) {
        dp[i][j] = dp[i - 1][j];
      } else {
        dp[i][j] = dp[i][j - 1];
      }
    }
  }
  return dp[m][n];
};
console.log(longestCommonSubsequence("abcdefgfacw","bcdadfefafg"));

