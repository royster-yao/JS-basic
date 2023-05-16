// Object.getOwnPropertyNames() 方法用于获取指定对象的所有自身 Property 的键名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
// 语法: Object.getOwnPropertyNames(O);

/**
 * * Object.getOwnPropertyNames(O)
 * @param {O}: 用于获取 Property 键名的目标对象,类型：object
 * @returns: 返回 Properties 键名组成的数组。
 */

const username = Symbol("张三")
const obj = {
  username,
  id: "202005002196",
  age: 21,
  gender: "男",
  sayHello: () => {
    console.log("你好啊！")
  },
}

Object.defineProperty(obj, "id", {
  writable: false,
})
console.log(obj.username)
// 使用 Array.forEach 输出属性名和属性值
const result = Object.getOwnPropertyNames(obj).forEach((val) => {
  console.log(`${val}:${obj[val]}`)
})
console.log(result)
