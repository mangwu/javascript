/*
 * @Author: mangwu                                                             *
 * @File: 9.1 r.js                                                             *
 * @Date: 2023-07-24 14:45:47                                                  *
 * @LastModifiedDate: 2023-07-24 14:50:18                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.on("close", function () {
  console.log("You actually understood recursion! BYE BYE !!!");
  process.exit(0);
});
function understandRecursion() {
  rl.question("Do you understand recursion?(Yes/No)", function (answer) {
    if (answer === "Yes") {
      rl.close();
    } else {
      understandRecursion();
    }
  });
}
understandRecursion();
