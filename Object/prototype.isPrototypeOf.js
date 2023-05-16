// Object.prototype.isPrototypeOf() 方法用于测试指定对象是否存在于目标对象的原型链上。
// 语法：O.prototype.isPrototypeOf(V);

/**
 * * O.prototype.isPrototypeOf(V)
 * @param {O}: 指定对象,类型：object
 * @param {V}: 目标对象（在该对象原型链上搜寻）,类型：object
 */

const obj = {
  gender: "男",
}
const obj1 = Object.create(obj)
const result = obj.isPrototypeOf(obj1)
console.log(result)
