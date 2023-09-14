/*
 * @Author: mangwu                                                             *
 * @File: backtracking-n.js                                                    *
 * @Date: 2023-09-14 17:02:10                                                  *
 * @LastModifiedDate: 2023-09-14 18:08:46                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 按照国际象棋的规则，皇后可以攻击与之处在同一行或同一列或同一斜线上的棋子。

// n 皇后问题 研究的是如何将 n 个皇后放置在 n×n 的棋盘上，并且使皇后彼此之间不能相互攻击。

// 给你一个整数 n ，返回所有不同的 n 皇后问题 的解决方案。

// 每一种解法包含一个不同的 n 皇后问题 的棋子放置方案，该方案中 'Q' 和 '.' 分别代表了皇后和空位。

/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  // n皇后问题,使用回溯解决
  const ans = [];
  const nQueens = new Array(n).fill(0).map(() => new Array(n).fill("."));
  const dfs = (rest) => {
    // rest是还需要填入的皇后数量
    if (rest === 0) {
      // 合格的nQueens
      ans.push(nQueens.slice().map((v) => v.join("")));
      return;
    }
    // 规定第n个在第n-1行，也就是n - rest
    for (let j = 0; j < n; j++) {
      if (nQueens[n - rest][j] === "." && isSafe(nQueens, n - rest, j)) {
        nQueens[n - rest][j] = "Q";
        dfs(rest - 1);
        nQueens[n - rest][j] = ".";
      }
    }
  };
  dfs(n);
  return ans;
};

function isSafe(nQueens, row, col) {
  return (
    !usedInRow(nQueens, row) &&
    !usedInCol(nQueens, col) &&
    !usedInDiagonal(nQueens, row, col)
  );
}

function usedInRow(nQueens, row) {
  for (const item of nQueens[row]) if (item === "Q") return true;
  return false;
}

function usedInCol(nQueens, col) {
  for (let i = 0; i < nQueens.length; i++)
    if (nQueens[i][col] === "Q") return true;
  return false;
}
const DIRS = [
  [1, 1],
  [1, -1],
  [-1, 1],
  [-1, -1],
];
function usedInDiagonal(nQueens, row, col) {
  const n = nQueens.length;
  for (const dir of DIRS) {
    let i = row + dir[0];
    let j = col + dir[1];
    while (i >= 0 && i < n && j >= 0 && j < n) {
      if (nQueens[i][j] === "Q") return true;
      i += dir[0];
      j += dir[1];
    }
  }
  return false;
}
