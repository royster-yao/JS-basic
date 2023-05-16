// Object.prototype.hasOwnProperty 方法用于检测指定对象自有 Properties 中是否具有指定的 Property。
// 语法:O.prototype.hasOwnProperty(V);

/**
 * * O.prototype.hasOwnProperty(V)
 * @param {O}: 需要指定的对象,类型：object
 * @param {V}: 需要检测的 Property 字符串名称或者 Symbol,类型：string/symbol
 * @returns: 返回该对象是否含有指定 Property 的 Boolean 值。
 */

const obj = {
  id: "20230515",
  name: "张三",
  age: 18,
  gender: "男",
}

Object.defineProperty(obj, "id", {
  enumerable: false,
})

const result = obj.hasOwnProperty('id')
console.log(result);