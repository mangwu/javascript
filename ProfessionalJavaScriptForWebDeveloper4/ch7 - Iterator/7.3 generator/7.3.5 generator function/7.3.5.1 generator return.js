/*
 * Filename: d:\project\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch7 - Iterator\7.3 generator\7.3.5 generator function\7.3.5.1 generator return
 * Path: d:\project\study\javascript\ProfessionalJavaScriptForWebDeveloper4\ch7 - Iterator\7.3 generator\7.3.5 generator function
 * Created Date: Tuesday, September 6th 2022, 5:40:16 pm
 * Author: mangwu
 *
 * Copyright (c) 2022 Your Company
 */

function* range(start, end) {
  while (start < end) {
    yield start;
    start++;
  }
}
const gt = range(1, 8);
gt.return = function (value) {
  console.log("close");
  return gt.return(value);
};
const [a, b, c] = gt;
