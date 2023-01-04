/*
 * @Author: mangwu                                                             *
 * @File: 14.3.1.2 CharacterData Mutation.js                                   *
 * @Date: 2023-01-04 16:27:24                                                  *
 * @LastModifiedDate: 2023-01-04 17:34:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const div = document.querySelector("div");

const observer = new MutationObserver((MutationRecords) =>
  console.log(MutationRecords)
);

observer.observe(div, {
  characterData: true,
  subtree: true,
});
div.textContent = "Hello";
div.appendChild(document.createTextNode("你好"));
div.appendChild(document.createElement("p"));
div.firstChild.data = "KKK";
observer.disconnect();

observer.observe(div.firstChild, { characterData: true });
div.firstChild.textContent = "KKK";
div.firstChild.data = "SSS";
div.firstChild.nodeValue = "RRR";
div.replaceChild(document.createTextNode("MMM"), div.firstChild);
div.firstChild.data = "SSS";
