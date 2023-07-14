/*
 * @Author: mangwu                                                             *
 * @File: 5.3.1 circle queue.js                                                *
 * @Date: 2022-11-02 17:09:30                                                  *
 * @LastModifiedDate: 2023-07-14 17:31:00                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2022 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

// 击鼓传花游戏
// 给你一个长度为n的名字数组names ，名字各不相同，
// 这n个人按照names中的顺序顺时针围成一个圈，初始花圈在数组中的第一个人手上，
// 一个回合，有花圈的人可以将花圈传递给左手（顺时针）的人，共有k个回合，问k个回合后，花圈最终在谁的手上

const { Queue } = require("./5.1.1 Queue");

/**
 * @description 击鼓传花游戏计算胜利者
 * @param {string[]} names 击鼓传花游戏者
 * @param {number} k 回合数，大于0
 */
var hotPotatoGame = function (names, k) {
  const queue = new Queue();
  queue.enqueue(...names);
  while (queue.size() > 1) {
    for (let i = 0; i < k; i++) {
      queue.enqueue(queue.dequeue());
    }
    // 淘汰的人
    console.log(queue.dequeue(), "被淘汰");
  }
  return queue.dequeue();
};

const players = ["John", "Jack", "Camia", "Ingrid", "Carl"];
console.log(hotPotatoGame(players, 1));

/**
 * @description 击鼓传花游戏计算胜利者
 * @param {string[]} names 击鼓传花游戏者
 * @param {number} k 回合数，大于0
 */
var hotPotatoGame = function (names, k) {
  let ansIdx = 0;
  const n = names.length;
  k++;
  for (let i = 2; i <= n; i++) {
    ansIdx = (ansIdx + k) % i;
    console.log(ansIdx);
  }
  return names[ansIdx];
};
console.log(hotPotatoGame(players, 1));
