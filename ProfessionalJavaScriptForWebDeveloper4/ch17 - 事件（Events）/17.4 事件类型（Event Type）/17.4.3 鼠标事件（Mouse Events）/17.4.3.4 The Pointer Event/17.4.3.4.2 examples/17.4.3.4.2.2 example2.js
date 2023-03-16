/*
 * @Author: mangwu                                                             *
 * @File: 17.4.3.4.2.2 example2.js                                             *
 * @Date: 2023-03-16 16:57:26                                                  *
 * @LastModifiedDate: 2023-03-16 16:58:23                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

window.addEventListener("pointerdown", detectInputType);

function detectInputType(event) {
  switch (event.pointerType) {
    case "mouse":
      /* mouse input detected */
      break;
    case "pen":
      /* pen/stylus input detected */
      break;
    case "touch":
      /* touch input detected */
      break;
    default:
    /* pointerType is empty (could not be detected)
      or UA-specific custom type */
  }
}
