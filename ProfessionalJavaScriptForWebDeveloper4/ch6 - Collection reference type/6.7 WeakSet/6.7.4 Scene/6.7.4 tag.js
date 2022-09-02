/*
 * @Author: mangwu                                                             *
 * @File: 6.7.4 tag.js                                                         *
 * @Date: 2022-09-02 13:45:24                                                  *
 * @LastModifiedDate: 2022-09-02 13:52:11                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 使用弱集合的应用
const disableEles = new WeakSet();
const loginButton = document.querySelector("#login");

// 通过加入对应集合，给这个节点打上禁用标签
disableEles.add(loginButton);
