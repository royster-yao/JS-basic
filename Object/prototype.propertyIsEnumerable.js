// Object.prototype.propertyIsEnumerable() 方法用于检测指定 Property 是否可枚举。
// 语法：O.prototype.propertyIsEnumerable(V);

/**
 * * O.prototype.propertyIsEnumerable(V)
 * @param {O}: 目标对象,类型: object
 * @param {V}: 需要检测的 Property 键名,类型: string
 * @returns: 返回表示指定 Property 键名是否可枚举的 Boolean 类型值。
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
const result = obj.propertyIsEnumerable("id")
const result1 = obj.propertyIsEnumerable("name")

console.log(result)
console.log(result1)
