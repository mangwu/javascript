/*
 * @Author: mangwu                                                             *
 * @File: 6.1.1 LinkedNodeList.js                                              *
 * @Date: 2023-07-17 14:51:44                                                  *
 * @LastModifiedDate: 2023-07-17 17:29:51                                      *
 * @ModifiedBy: mangwu                                                         *
 * -----------------------                                                     *
 * Copyright (c) 2023 mangwu                                                   *
 * -----------------------                                                     *
 * @HISTORY:                                                                   *
 * Date   	            By 	    Comments                                       *
 * ---------------------	--------	----------------------------------------------- *
 */

/**
 * @description 默认比较方法
 * @param {any} a 元素a
 * @param {any} b 元素b
 * @returns {boolean}
 */
function defaultEquals(a, b) {
  return a === b;
}

/**
 * @description 节点类型
 * @member value 节点值
 * @member next 下一个节点的引用
 */
class Node {
  /**
   * @description Node构造器
   * @param {any} value 默认值为null
   * @param {any} next 默认值为null
   */
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

/**
 * @description 链表类型
 * @member count 链表中节点的数量（不包括链表对象本身）
 * @member equalsFn 节点比较方法
 * @member head 链表的第一个节点
 */
class LinkedNodeList {
  /**
   * @description LinkedNodeList构造器
   * @param {Function} equalsFn 比较方法，默认为 ===
   */
  constructor(equalsFn = defaultEquals) {
    this.count = 0;
    this.equalsFn = equalsFn;
    this.head = null;
  }
  /**
   * @description 返回链表中特定位置的元素，如果索引不在[0, count)范围就会返回undefined
   * @param {number} index 链表中节点的索引位置
   * @returns {Node | undefined}
   */
  getNodeAt(index) {
    if (index >= 0 && index < this.count) {
      let node = this.head;
      while (index) {
        node = node.next;
        index--;
      }
      return node;
    }
    return undefined;
  }
  /**
   * @description 向链表尾部添加一个新元素 注意会舍弃掉传入节点的next引用
   * @param {Node} node 添加的节点
   * @returns {LinkedNodeList} this，便于链式调用
   */
  push(node) {
    node.next = null;
    this.count++;
    if (this.head) {
      // 判断是否是首次添加节点
      this.head = this.node;
    } else {
      this.getNodeAt(this.count - 1).next = node;
    }
    return this;
  }
  /**
   * @description 向链表的特定位置插入一个新节点
   * @param {Node} node 插入的节点
   * @param {number} pos 插入节点应该在链表中的位置
   * @returns {LinkedNodeList | undefined} this，便于链式调用，注意可能因为pos有误插入失败而返回undefined
   */
  insert(node, pos) {
    if (pos === 0) {
      // 插入位置是否是首节点位置
      node.next = this.head;
      this.head = node;
    } else if (pos > 0 && pos <= this.count) {
      const preNode = this.getNodeAt(pos - 1);
      node.next = preNode.next;
      preNode.next = node;
      return this;
    }
    return undefined;
  }
  /**
   * @description 移除首节点，返回首节点或undefined
   * @returns {Node | undefined}
   */
  removeHead() {
    if (!this.isEmpty()) {
      const head = this.head;
      this.head = head.next;
      head.next = null;
      this.count--;
      return head;
    }
    return undefined;
  }
  /**
   * @description 从链表的特定位置移除一个节点
   * @param {number} pos 要移除节点的位置
   * @returns {Node | undefined} 移除的节点，如果pos有误会返回undefined
   */
  removeAt(pos) {
    if (pos === 0) {
      // 移除位置是首节点位置
      return this.removeHead();
    } else if (pos > 0 && pos < this.count) {
      const preNode = this.getNodeAt(pos - 1);
      const node = this.getNodeAt(pos);
      preNode.next = node.next;
      node.next = null;
      this.count--;
      return node;
    }
    return undefined;
  }
  /**
   * @description 返回一个元素的位置
   * @param {any} ele 查找的元素，可能是节点，也可能是值，因为它要使用equalsFn进行比较
   * @returns {number} pos
   */
  indexOf(ele) {
    let cur = this.head;
    let idx = 0;
    while (cur) {
      if (this.defaultEquals(cur, ele)) return idx;
      cur = cur.next;
      idx++;
    }
    return -1;
  }
  /**
   * @description 移除一个元素
   * @param {any} ele 移除的元素，可能是节点，也可能是值，因为它要使用equalsFn进行比较
   * @returns {Node | undefined}
   */
  remove(ele) {
    if (this.defaultEquals(ele, this.head)) {
      // 移除的是首节点
      return this.removeHead();
    } else {
      const idx = this.indexOf(ele);
      return this.removeAt(idx);
    }
  }
  /**
   * @description 判断链表是否为空
   * @returns {boolean}
   */
  isEmpty() {
    return this.count === 0;
  }
}
