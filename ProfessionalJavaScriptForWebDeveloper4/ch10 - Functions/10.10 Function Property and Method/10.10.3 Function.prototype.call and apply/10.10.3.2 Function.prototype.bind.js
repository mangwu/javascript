/*
 * @Author: mangwu                                                             *
 * @File: 10.10.3.2 Function.prototype.bind.js                                 *
 * @Date: 2022-10-09 22:00:24                                                  *
 * @LastModifiedDate: 2022-10-09 22:02:01                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 绑定永久的this值

function sayColor() {
  console.log(this.color);
}

this.color = "red";

const bound = sayColor.bind(this);
const o = {
  color: "blue",
};
bound();
bound.call(o);
