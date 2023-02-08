/*
 * @Author: mangwu                                                             *
 * @File: 17.3.1.5.1 main.js                                                   *
 * @Date: 2023-02-08 17:25:06                                                  *
 * @LastModifiedDate: 2023-02-08 17:29:39                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const root = document.querySelector("#root");

const shadowRoot = root.attachShadow({ mode: "open" });

const tempate = `<div>mangwu</div><span><button>happy</button></span>`;
