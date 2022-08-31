/*
 * @Author: mangwu                                                             *
 * @File: 6.5.5.2 metadata.js                                                  *
 * @Date: 2022-08-31 23:01:29                                                  *
 * @LastModifiedDate: 2022-08-31 23:03:02                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 关联元数据
const node = document.querySelector("#login");
const wm = new WeakMap();
// 给节点关联元数据
wm.set(node, { disabled: true, dataUser: "" });

