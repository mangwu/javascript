/**
 * @description 二分查找最简单场景：查找一个数，返回其索引
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-21 09:46:04
 * @copyright © 2021 wangzhihao, All rights reserved.
 */

/**
 * @description 简单的查找数，返回索引
 * @param {Array} nums 被查询数组
 * @param {Number} target 查询对象
 * @returns {Number} 查询对象所在被查询数组的索引
 */
var binarySearch = (nums, target) => {
  // 声明查找区间
  let left = 0;
  let right = nums.length - 1;

  // 循环查找, 条件为查找区间正常
  while (left <= right) {
    // 计算中间索引
    let mid = Math.floor((left + right) / 2);
    // 中间值与target比较判断
    if (nums[mid] === target) {
      // 找到查询目标索引
      return mid;
    } else if (nums[mid] > target) {
      // 假定递增，缩小区间,因为mid已经被比较，不包含mid
      right = mid - 1;
    } else if (nums[mid] < target) {
      // 假定递增，缩小区间,不包含mid
      left = mid + 1;
    }
  }
  // 如果遍历结束都没有，则返回-1
  return -1;
};

console.log(binarySearch([2, 5, 7, 10, 12, 15, 24, 25, 28, 33], 19));
console.log(binarySearch([2, 7, 7, 7, 10, 12, 15, 24, 25, 28, 33], 7));
