/*
 * @Author: mangwu                                                             *
 * @File: backtracking-.js                                                     *
 * @Date: 2023-09-15 11:16:20                                                  *
 * @LastModifiedDate: 2023-09-18 13:47:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
const DIRS = [
  [1, 2],
  [1, -2],
  [-1, 2],
  [-1, -2],
  [2, 1],
  [2, -1],
  [-2, 1],
  [-2, -1],
];

/**
 * @description 骑士巡视
 * @param {number} n
 * @returns {[][]}
 */
function knightTour(n) {
  const grid = new Array(n).fill(0).map(() => new Array(n).fill("."));
  grid[0][0] = 0; // 初始在左上角
  const ans = [];
  const cache = new Array(n)
    .fill(0)
    .map(() => new Array(n).fill(".").map((v) => new Array(n * n).fill(-1)));
  const dfs = (cur, rest) => {
    // cur 当前位置，rest剩余的空格位置（未到达过的）
    if (rest === 0) {
      // 一种路径
      ans.push(grid.slice().map((v) => v.slice()));
      return true;
    }
    if (cache[cur[0]][cur[1]][rest] === false) return false;
    for (const dir of DIRS) {
      const [x, y] = [cur[0] + dir[0], cur[1] + dir[1]];
      if (isSafe(grid, x, y)) {
        grid[x][y] = n * n - rest;
        dfs([x, y], rest - 1);
        grid[x][y] = ".";
      }
    }
    cache[cur[0]][cur[1]][rest] === false;
    return false;
  };
  dfs([0, 0], n * n - 1);
  return ans;
}

function isSafe(grid, x, y) {
  const n = grid.length;
  if (x >= 0 && x < n && y >= 0 && y < n && grid[x][y] === ".") return true;
  return false;
}

console.log(knightTour(9));
