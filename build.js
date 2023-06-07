/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-06 16:38:03                                                  *
 * @LastModifiedDate: 2023-06-07 10:24:42                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

const fs = require("fs");
// const path =

// 忽略的文件夹
const ignore = new Set([
  ".vscode",
  "node_modules",
  "dist",
  "mochawesome-report",
  "coverage.lcov",
  ".nyc_output",
  "coverage",
  ".idea",
  "snippet.js",
]);
const hash = new Map();

class FileTree {
  constructor(path, name, type) {
    this.path = path;
    this.name = name;
    this.type = type;
    this.next = [];
  }
  initial() {
    if (this.type === "folder") {
      const files = fs.readdirSync(this.path, "utf-8");
      for (const file of files) {
        if (ignore.has(file)) return;
        const curPath = this.path + "/" + file;
        const stats = fs.statSync(curPath);
        let type = stats.isFile() ? "file" : "folder";
        const curFileTree = new FileTree(curPath, file, type);
        hash.set(curPath, [file, type, curFileTree]);
        this.next.push(curFileTree);
        curFileTree.initial();
      }
    }
  }
}

const FileDirs = [
  "./ProfessionalJavaScriptForWebDeveloper4",
  "./Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition-master",
  "./AntdReact",
  "./ScatteredRecord",
];

let origin = "";
if (this.location) {
  origin = location.origin;
}

const dfs = (fileTree) => {
  const { name, path, type, next } = fileTree;
  if (type === "file") {
    return `\t\t<div class="file"><a href="${
      origin + path.substring(2)
    }" target="_blank">${name}</a></div>\n`;
  } else {
    let cur = `\t\t<div class="dir"><div class="dir-name">${name}</div>\n`;
    for (const nextTree of next) {
      cur += dfs(nextTree);
    }
    cur += "\t\t</div>\n";
    return cur;
  }
};

function tryCatch(callback, ...args) {
  try {
    callback(...args);
  } catch (error) {
    console.log(`${callback.toString()}执行错误`, error.message);
  }
}

function writeIndexHtml(str) {
  fs.writeFileSync("./index.html", str, "utf-8");
}

function initialAll() {
  let res = "";
  FileDirs.forEach((v) => {
    const fileTree = new FileTree(v, v.substring(2), "folder");
    fileTree.initial();
    res += dfs(fileTree);
  });
  return res;
}

function main() {
  let HTML = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>文件结构</title>
    <link rel="stylesheet" href="./style.css">
    <link >
  </head>
  <body>
  <h2>JavaScript学习笔记源码文档结构</h2>\n`;
  HTML += initialAll();
  HTML += `
  </body>
</html>`;
  tryCatch(writeIndexHtml, HTML);
}
main();
