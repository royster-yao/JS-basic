// Object.keys() 方法用于获取指定对象自身可枚举 Property 组成的键名数组。
// 语法：Object.keys(O);

/**
 * * Object.keys(O)
 * @param {O}: 指定对象,类型：object
 * @returns: 返回对象所有可枚举 Property 的键名组成的数组。
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
const result = Object.keys(obj)
console.log(result)

// 备注：
// 获取到的数组中键名顺序与使用 for 系列循环语句获取到的键名顺序一致。
