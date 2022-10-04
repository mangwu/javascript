/*
 * @Author: mangwu                                                             *
 * @File: 4.2 bind.js                                                          *
 * @Date: 2022-10-03 20:37:40                                                  *
 * @LastModifiedDate: 2022-10-03 20:45:21                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// bind方法创建一个新函数，永久绑定指定的this值

function a() {
  console.log(this.prop);
}

let g = a.bind({ prop: "g" });
// 再绑定会无效，仍然使用上面的g
let f = g.bind({ prop: "f" });

// 使用apply，call无法指定已绑定的this对象
g.apply({ prop: "apply" }, []);
f.apply({ prop: "apply" }, []);

globalThis.prop = "global";
// 普通函数默认使用global作为this
a();
const o = { a, g, f, prop: "o" };
o.a(); // 普通函数的运行时绑定特性
o.g(); // g
o.f(); // g
