/*
 * @Author: mangwu                                                             *
 * @File: 6.3.4.3 ElementTypeArrayMethod.js                                    *
 * @Date: 2022-08-26 10:38:20                                                  *
 * @LastModifiedDate: 2022-08-30 11:29:17                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 定型数组实例方法，和Array类型
const int32Arr = new Int32Array([1, 2, 3, 4]);

// 1. at()
console.log(int32Arr.at(3));

// 2. copyWithin()
console.log(int32Arr.copyWithin(1, 2, 4));

// 3. entries()
for (const [key, val] of int32Arr.entries()) {
  console.log(key, val);
}

// 4. every()
console.log(int32Arr.every((v) => v > 0));

// 5. fill()
console.log(int32Arr.fill(1));

// 6. filter()
const filterArr = int32Arr.filter((_v, i) => i);
console.log(int32Arr.buffer);
console.log(filterArr, filterArr.buffer);

// 7. find()
console.log(int32Arr.find((v, i) => v + i == 2));

// 8. findIndex()
console.log(int32Arr.findIndex((v, i) => v + i == 3));

// 9. forEach()
int32Arr.forEach((v, i) => {
  console.log(v, i);
});

// 10 includes();
const float32Arr = new Float32Array(int32Arr);
console.log(float32Arr.includes(1.0));
console.log(int32Arr.includes(1.0));

console.log(new Uint16Array([NaN]).includes(NaN));
console.log(new Float32Array([NaN]).includes(NaN));
console.log(new Uint16Array([NaN]));
console.log(new Float32Array([NaN]));

// 11. indexOf()
console.log(new Float32Array([NaN]).indexOf(NaN));

// 12 lastIndexOf
console.log(new Float32Array([NaN]).lastIndexOf(NaN));

// 13. join()
console.log(int32Arr.join());

// 14 keys()
for (let key of int32Arr.keys()) {
  console.log(key, typeof key);
}

// 15 map
console.log([1, , 2, 3, ,].map((v) => 2));
console.log(new Int32Array(5).map((_v) => 5));

// 16 reduce / reduceRight
console.log(int32Arr.reduce((pre, cur) => pre + cur));
console.log(int32Arr.reduceRight((pre, cur) => pre + cur));

// 17 reverce()
const int16Arr = new Int16Array([1, 2, 3, 4]);
console.log(int16Arr.reverse());

// 18 set
console.log(int32Arr);
int32Arr.set([5, 4], 1);
console.log(int32Arr);
int32Arr.set(int16Arr);
console.log(int32Arr);

// 19 slice
let copy = int32Arr.slice();
console.log(copy);
console.log(int32Arr.buffer === copy.buffer);

// 20 some
console.log(int32Arr.some((v, i) => v + i === 5));

// 21 sort
console.log(new Int16Array([12, 85, 61, 2, 5, 6, 8]).sort());

// 22 subArray
const subArr = int32Arr.subarray(1);
console.log(int32Arr);
console.log(subArr);
console.log(int32Arr.buffer);
console.log(subArr.buffer);
console.log(int32Arr.buffer === subArr.buffer);
console.log(int32Arr === subArr);

// 23 values
for (const val of int32Arr.values()) {
  console.log(val);
}

// 24 toLocaleString
console.log(new Int16Array([1234, 5678, 124]).toString());
console.log(new Int16Array([1234, 5678, 124]).toLocaleString());
console.log(new Float32Array([1234, 5678.24578, 124.1]).toString());
console.log(new Float32Array([1234, 5678.24578, 124.1]).toLocaleString());

// 25 @@iterator
const arrIterator = int32Arr[Symbol.iterator]();
const arrIterator2 = int32Arr.values();
console.log(arrIterator === arrIterator2);
for (const val of arrIterator) {
  console.log(val);
}
