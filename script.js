/*
 * @Author: mangwu                                                             *
 * @File: script.js                                                            *
 * @Date: 2024-05-23 15:44:55                                                  *
 * @LastModifiedDate: 2024-05-23 16:02:44                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2024 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */
window.addEventListener("load", () => {
  const dirNames = document.querySelectorAll(".dir-name");
  dirNames.forEach((dirName) => {
    dirName.addEventListener("click", () => {
      const style = dirName.parentElement.style;
      if (style.overflow !== "hidden") {
        dirName.parentElement.style.height = "24px";
        dirName.parentElement.style.overflow = "hidden";
      } else {
        dirName.parentElement.style.height = "auto";
        dirName.parentElement.style.overflow = "";
      }
    });
  });
});
