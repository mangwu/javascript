/*
 * @Author: mangwu                                                             *
 * @File: backtracking-sudoku.js                                               *
 * @Date: 2023-09-14 14:49:44                                                  *
 * @LastModifiedDate: 2023-09-14 16:56:09                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

function sudokuSolver(sudoku) {
  if (solveSudoku(sudoku)) {
    return sudoku;
  }
  return "SODUKU WITHOUT SOLUTION!";
}

function solveSudoku(sudoku) {
  // 查找空白格子，顺便检查是否已经全部填充
  let row = 0;
  let col = 0;
  let hasBlank = false;
  out: for (; row < 9; row++) {
    for (col = 0; col < 9; col++) {
      if (sudoku[row][col] === 0) {
        // 找到0
        hasBlank = true;
        break out;
      }
    }
  }

  if (!hasBlank) return true; // 没有找到空单元
  for (let i = 1; i <= 9; i++) {
    // 判断是否可选，可选就填入然后进行尝试
    if (isSafe(sudoku, row, col, i)) {
      sudoku[row][col] = i;
      if (solveSudoku(sudoku)) return true; // 继续选择
      sudoku[row][col] = 0; // 回溯
    }
  }
  return false;
}

function isSafe(sudoku, row, col, num) {
  return (
    !usedInRow(sudoku, row, num) &&
    !usedInCol(sudoku, col, num) &&
    !usedInBox(sudoku, Math.floor(row / 3) * 3, Math.floor(col / 3) * 3, num)
  );
}

function usedInRow(sudoku, row, num) {
  for (const item of sudoku[row]) if (item === num) return true;
  return false;
}

function usedInCol(sudoku, col, num) {
  for (let i = 0; i < 9; i++) if (sudoku[i][col] === num) return true;
  return false;
}

function usedInBox(sudoku, boxStartRow, boxStartCol, num) {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (sudoku[boxStartRow + i][boxStartCol + j] === num) return true;
    }
  }
  return false;
}

console.log(
  sudokuSolver([
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
  ])
);

console.log(
  sudokuSolver([
    [0, 0, 0, 0, 0, 0, 9, 8, 0],
    [0, 0, 0, 0, 5, 8, 4, 1, 2],
    [4, 0, 2, 0, 0, 1, 0, 7, 0],
    [7, 0, 0, 8, 0, 0, 0, 4, 1],
    [3, 4, 1, 2, 6, 5, 0, 9, 0],
    [0, 0, 8, 0, 7, 0, 0, 3, 0],
    [8, 0, 9, 5, 0, 3, 0, 6, 4],
    [5, 0, 0, 4, 8, 6, 1, 0, 9],
    [0, 6, 4, 9, 0, 7, 3, 5, 8],
  ])
);

console.log(
  sudokuSolver([
    [0, 0, 6, 0, 0, 0, 8, 0, 0],
    [8, 0, 3, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 3, 8, 0, 9, 0, 0],
    [0, 0, 0, 0, 0, 8, 0, 0, 0],
    [0, 0, 0, 0, 2, 0, 0, 0, 5],
    [0, 0, 0, 0, 6, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [9, 0, 5, 0, 0, 0, 4, 2, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);

function randomGenerateSudoku() {
  const sudoku = new Array(9).fill(0).map(() => new Array(9).fill(0));
  // 生成11个数字填入sudoku中
  for (let i = 0; i < 11; i++) {
    while (true) {
      const randomNum = Math.floor(Math.random() * 9) + 1;
      const randomRow = Math.floor(Math.random() * 9);
      const randomCol = Math.floor(Math.random() * 9);
      if (
        sudoku[randomRow][randomCol] === 0 &&
        isSafe(sudoku, randomRow, randomCol, randomNum)
      ) {
        sudoku[randomRow][randomCol] = randomNum;
        break;
      }
    }
  }
  return sudoku;
}
// 生成随机数独
console.log("----生成随机数独----");
const sudoku = randomGenerateSudoku();
console.log(sudoku);
console.log("----回溯解谜----");
console.log(sudokuSolver(sudoku));


