/**
 * @description 寻找左侧边界的二分查找
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-21 11:23:24
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 寻找左边界的二分查找
 * @param {Array} nums 被搜索数组
 * @param {Number} target 查询目标
 * @returns {Number} 左侧边界的目标索引值
 */
var binaryLeftSearch = (nums, target) => {
  if (nums.length === 0) return -1;
  // 声明搜索区间
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    }
  }
  if (left === nums.length) return -1;
  return nums[left] === target ? left : -1;
};

console.log(binaryLeftSearch([2, 3, 5, 5, 5, 5, 7, 8], 5));
console.log(binaryLeftSearch([2, 3, 5, 5, 5, 5, 7, 8], 10));
console.log(binaryLeftSearch([2, 3, 5, 5, 5, 5, 7, 8], 1));
console.log(binaryLeftSearch([2, 3, 5, 5, 5, 5, 7, 8], 6));
