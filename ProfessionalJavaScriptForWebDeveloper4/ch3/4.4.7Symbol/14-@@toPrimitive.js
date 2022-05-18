// Symbol[toPrimitive] 将对象转化为一个原始值

// +

// 1. 符号
const date = new Date();
console.log(+date);
// 2. 对象
class Bar {
  constructor(data) {
    this.data = data;
  }
  toString() {
    return this.data;
  }
}
const bar1 = new Bar(1);
const bar2 = new Bar(2);
const bar3 = new Bar("3");
console.log(bar1 + bar2);
console.log(bar1 + bar3);

