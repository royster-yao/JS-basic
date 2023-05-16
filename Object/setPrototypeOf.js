// Object.setPrototypeOf() 方法用于设置一个指定的对象的原型 ( 即，内部 [[Prototype]] 属性）到另一个对象或 null。
// 语法：Object.setPrototypeOf(O, proto);

/**
 * * Object.setPrototypeOf(O, proto);
 * @param {O}: 要设置其原型的对象,类型：object
 * @param {proto}: 原型对象,类型：object
 * @returns: 返回设置原型后的对象。
 */

const obj = {
  id: "20230515",
  name: "张三",
  age: 18,
  gender: "男",
}

const obj1 = {
  address: "昆明",
}
Object.setPrototypeOf(obj1, obj)
console.log(obj1)
