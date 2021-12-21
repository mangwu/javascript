/**
 * @description 寻找右侧边界的二分搜索
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-21 14:38:53
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 寻找右侧边界的二分搜索 
 * @param {Array} nums 被搜索数组
 * @param {Number} target 搜索目标
 * @returns {Number}   目标的右侧边界数组
 */
var binaryRightSearch = (nums, target) => {
  if (nums.length === 0) return -1;
  // 声明搜索区间
  let left = 0;
  let right = nums.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      //设置为mid + 1
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    }
  }
  console.log(left);
  return nums[left - 1] === target ? left - 1 : -1;
};

console.log(binaryRightSearch([2, 3, 5, 5, 5, 5, 7, 8], 5));
console.log(binaryRightSearch([2, 3, 5, 5, 5, 5, 7, 8], 10));
console.log(binaryRightSearch([2, 3, 5, 5, 5, 5, 7, 8], 1));
console.log(binaryRightSearch([2, 3, 5, 5, 5, 5, 7, 8], 6));