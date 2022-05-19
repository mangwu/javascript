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

// valueOf
const object = { a: 1, b: 2 };
console.log(object);

// toString

class A extends Object {
  constructor(data) {
    super();
    this.data = data;
  }
}
const a = new A(123);
console.log(a); // 调用valueOf()
console.log(a.toString()); // 调用toString();

// 用于检查对象
let toString = Object.prototype.toString;
console.log(toString.call(this));
console.log(toString.call(new Date()));
console.log(toString.call(global));
console.log(toString.call()); // thisArg 是undefined
console.log(toString.call(null));

console.log(new Date().toString());

// 优先级
let obj2 = {
  value: 3,
  toString() {
    return new Date();
  },
};
let obj3 = {
  value: 4,
  valueOf() {
    return 2;
  },
  toString() {
    return 3;
  },
};
try {
  console.log(obj3 + 1);
  // 报错
  // 1.没有[Symbol.toPrimitive]()方法
  // 2.valueOf()方法继承对象默认方法，返回对象本身
  // 3.toString()被覆写，返回Date类型对象，不是原始类型
  // 4.不能转化为原始类型，报错
  // valueOf
  console.log(obj2 + 1);
} catch (error) {
  console.log(error);
}
