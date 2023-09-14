/*
 * @Author: mangwu                                                             *
 * @File: backtracking-maze.js                                                     *
 * @Date: 2023-09-14 10:22:15                                                  *
 * @LastModifiedDate: 2023-09-14 10:56:27                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const DIRS = [
  [0, 1],
  [1, 0],
  [-1, 0],
  [0, -1],
];

function ratInAMaze(maze, start, end) {
  const n = maze.length;
  if (maze[end[0]][end[1]] === 1) return false;
  const path = [start];
  const set = new Set();
  set.add(start[0] * n + start[1]);
  const dfs = (cur) => {
    if (cur[0] === end[0] && cur[1] === end[1]) {
      console.log(path);
      return true;
    }
    let res = false;
    for (const dir of DIRS) {
      const x = cur[0] + dir[0];
      const y = cur[1] + dir[1];
      if (
        x >= 0 &&
        x < n &&
        y >= 0 &&
        y < n &&
        !set.has(x * n + y) &&
        maze[x][y] === 0
      ) {
        path.push([x, y]);
        set.add(x * n + y);
        res = res || dfs([x, y]);
        path.pop();
        set.delete(x * n + y);
      }
    }
    return res;
  };
  return dfs(start);
}

console.log(
  ratInAMaze(
    [
      [1, 0, 1, 0],
      [1, 0, 0, 0],
      [1, 1, 0, 1],
      [0, 0, 0, 1],
    ],
    [3, 0],
    [0, 3]
  )
);
