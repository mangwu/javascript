/*
 * @Author: mangwu                                                             *
 * @File: 10.0.3.2 function.prototype.call().js                                *
 * @Date: 2022-10-18 16:34:35                                                  *
 * @LastModifiedDate: 2022-10-18 16:37:31                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 盗用构造函数
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = "food";
}
const food = new Food("辣条", "五毛");
console.log(food);
