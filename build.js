/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-06 16:38:03                                                  *
 * @LastModifiedDate: 2024-05-24 17:24:13                                      *
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
      // 排序成创建日期
      files.sort((a, b) => {
        const statsA = fs.statSync(this.path + "/" + a);
        const statsB = fs.statSync(this.path + "/" + b);
        return statsA.birthtimeMs - statsB.birthtimeMs;
      });
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
    <title>JavaScript学习笔记源码文档结构</title>
    <link rel="stylesheet" href="./style.css">
		<link rel="shortcut icon" href="./images/结构.svg" type="image/x-icon">
    <script src="./script.js"></script>
  </head>
  <body>
  <h2>JavaScript学习笔记源码文档结构</h2>\n`;
  HTML += initialAll();
  HTML += `
  <button class="float-btn click-to-top" type="button">
    <div class="float-btn-body">
      <div class="float-btn-content">
        <div class="float-btn-icon">
          <span role="img" aria-label="vertical-align-top" class="anticon anticon-vertical-align-top">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="vertical-align-top" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </button>
  <button class="float-btn click-to-bottom" type="button">
    <div class="float-btn-body">
      <div class="float-btn-content">
        <div class="float-btn-icon">
          <span role="img" aria-label="vertical-align-top" class="anticon anticon-vertical-align-top">
            <svg viewBox="64 64 896 896" focusable="false" data-icon="vertical-align-top" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M859.9 168H164.1c-4.5 0-8.1 3.6-8.1 8v60c0 4.4 3.6 8 8.1 8h695.8c4.5 0 8.1-3.6 8.1-8v-60c0-4.4-3.6-8-8.1-8zM518.3 355a8 8 0 00-12.6 0l-112 141.7a7.98 7.98 0 006.3 12.9h73.9V848c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V509.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 355z"></path>
            </svg>
          </span>
        </div>
      </div>
    </div>
  </button>
  </body>
</html>`;
  tryCatch(writeIndexHtml, HTML);
}
main();
