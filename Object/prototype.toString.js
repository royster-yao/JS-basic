// Object.prototype.toString() 方法用于表示指定对象的字符串。
// 语法: O.prototype.toString();

/**
 * * O.prototype.toString() 表示该对象的字符串。
 * @param {O}: 目标对象，类型：object
 */

const obj = {
  id: "20230515",
  name: "张三",
  age: 18,
  gender: "男",
}
console.log(obj.toString()) //[object Object]
console.log(new Date().toString())
