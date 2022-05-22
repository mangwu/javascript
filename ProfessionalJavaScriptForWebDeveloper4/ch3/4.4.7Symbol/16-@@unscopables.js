/*
 * Filename: d:\Projects\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch3\4.4.7Symbol\16-@@toUn
 * Path: d:\Projects\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch3\4.4.7Symbol
 * Created Date: Sunday, May 22nd 2022, 11:11:30 pm
 * Author: mangwu
 *
 * Copyright (c) 2022 Your Company
 */

// unscopables

// with语句 performance是global的一个属性
with (performance) {
  var name = nodeTiming.name;
  var nodeStart = nodeTiming.nodeStart;
  var time = timeOrigin;
  console.log(name, nodeStart, time);
}

// 使用unscopables设置解绑
performance[Symbol.unscopables] = {
  timeOrigin: true,
};
try {
  with (performance) {
    var name = nodeTiming.name;
    var nodeStart = nodeTiming.nodeStart;
    var time = timeOrigin;
    console.log(name, nodeStart, time);
  }
} catch (error) {
  console.log("ReferenceError");
}
