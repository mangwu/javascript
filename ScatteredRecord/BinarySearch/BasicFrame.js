/**
 * @description 二分查找基本框架
 * @author mangwu <1185956753@qq.com>
 * @version  1.0
 * @date 2021-12-21 09:19:46
 * @copyright © 2021 wangzhihao, All rights reserved.
 */
/**
 * @description 二分查找基本框架  
 * @param {Array} nums 被查找有序数组
 * @param {Number} target 查找值
 */
var binarySearch = (nums, target) => {
  // 声明初始的查找区间
  let left = 0;
  let right = ...;

  // 循环查找
  while(...) { // 一般是left 和 right之间仍然构成区间时二分循环查找，可以写成 left <= right
    // 计算出区间中间索引
    let mid = Math.floor((left + right)/2);
    // 比较中间值与查找目标值大小
    if (nums[mid] === target) {
      // 等于，即找到查找目标
      // code to end search
    } else if (nums[mid] > target) {
      // 中间值大于target，缩小查找范围，假定数组递增，设置右边的值为mid
      right = mid;
    } else if (nums[mid] < target) {
      // 中间值小于target，缩小查找范围，假定数组递增，设置左边值为mid
      left = mid;
    }
  }
  // 返回值
  return ...
}