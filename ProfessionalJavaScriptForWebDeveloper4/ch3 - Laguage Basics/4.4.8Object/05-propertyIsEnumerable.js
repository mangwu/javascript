/*
 * Filename: d:\Projects\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch3\4.4.8Object\05-propertyIsNumbrable
 * Path: d:\Projects\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch3\4.4.8Object
 * Created Date: Monday, May 23rd 2022, 9:46:49 pm
 * Author: mangwu
 *
 * Copyright (c) 2022 Your Company
 */

// propertyIsEnumerable有对象调用，表明指定的属性是否可枚举
const a = [1, 2, 3];
console.log(a.propertyIsEnumerable(0));
console.log(a.propertyIsEnumerable(1));
console.log(a.propertyIsEnumerable(2));
console.log(a.propertyIsEnumerable("length"));

for (const i in a) {
  console.log(i, typeof i);
}
