// 命令式编程
function printArray(arr) {
  for (const item of arr) {
    console.log(item);
  }
}

printArray([8, 5, 2, 3, 4]);

// 函数式编程

function forEach(arr, callback) {
  for (const item of arr) {
    callback(item);
  }
}

function printSth(sth) {
  console.log(sth);
}
forEach([8, 5, 2, 3, 4], printSth);
