/*
 * @Author: mangwu                                                             *
 * @File: main.js                                                              *
 * @Date: 2023-06-06 16:38:03                                                  *
 * @LastModifiedDate: 2023-06-06 17:39:58                                      *
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
try {
  fs.writeFileSync(
    "./index.html",
    `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body></body>
</html>`,
    "utf8"
  );
} catch (err) {
  throw err;
}

const FileDirs = [
  "./ProfessionalJavaScriptForWebDeveloper4",
  "./Learning-JavaScript-Data-Structures-and-Algorithms-Third-Edition-master",
  "./AntdReact",
  "./ScatteredRecord",
];

const dfs = (fileTree) => {
  const { name, path, type, next } = fileTree;
  if(type === "file") {
    
  }
};

function initialAll() {
  FileDirs.forEach((v) => {
    const fileTree = new FileTree(v, v.substring(2), "folder");
    fileTree.initial();
  });
}
initialAll();
// 获取文件的树形结构
