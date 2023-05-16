// Object.getPrototypeOf() 方法用于获取指定对象的原型（内部 [[Prototype]] 属性的值）。
// 语法: Object.getPrototypeOf(O);

/**
 * * Object.getPrototypeOf(O)
 * @param {O}: 目标对象,类型: object
 * @returns: 返回目标对象的原型对象。
 */

const obj = {
  gander: "男",
  job: "student",
}

const obj1 = Object.create(obj)
const result = Object.getPrototypeOf(obj1)

console.log(result)
