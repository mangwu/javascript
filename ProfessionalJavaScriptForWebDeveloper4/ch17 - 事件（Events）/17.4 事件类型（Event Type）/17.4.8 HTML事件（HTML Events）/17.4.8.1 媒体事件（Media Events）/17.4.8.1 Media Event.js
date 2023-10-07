/*
 * @Author: mangwu                                                             *
 * @File: 17.4.8.1 Media Event.js                                              *
 * @Date: 2023-10-07 17:29:33                                                  *
 * @LastModifiedDate: 2023-10-07 17:35:40                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const video = document.querySelector("video");

video.addEventListener("loadstart", (e) => {
  console.log("loadstart", e.target.networkState);
});

video.addEventListener("progress", (e) => {
  console.log("progress", e.target.networkState);
});

video.addEventListener("suspend", (e) => {
  console.log("suspend", e.target.networkState);
});

video.addEventListener("abort", (e) => {
  console.log("abort", e.target.networkState);
});

video.addEventListener("error", (e) => {
  console.log("error", e.target.networkState);
});

video.addEventListener("play", (e) => {
  console.log("play", e.target.paused);
});

video.addEventListener("pause", (e) => {
  console.log("pause", e.target.paused);
});

const track = document.querySelector("track");
console.log(track);
track.addEventListener("change", (e) => {
  console.log("track change", e);
});
track.addEventListener("addtrack", (e) => {
  console.log("addtrack", e);
});

track.addEventListener("removetrack", (e) => {
  console.log("removetrack", e);
});
