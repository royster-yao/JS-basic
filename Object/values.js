// Object.values() 方法用于指定对象自身的所有可枚举 Property 值的数组。(ES8)
// 语法：Object.values(obj);

/**
 * * Object.values(obj)
 * @param {obj}: 指定对象,类型：object
 * @returns: 返回对象可枚举 Property 值的数组集合。
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

const result = Object.values(obj)
console.log(result)
