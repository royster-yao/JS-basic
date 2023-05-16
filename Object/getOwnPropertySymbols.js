// Object.getOwnPropertySymbols() 方法用于获取一个给定对象自身的所有 Symbol Property 的数组。
// 语法: Object.getOwnPropertySymbols(O);

/**
 * * Object.getOwnPropertySymbols(O)
 * @param {O}: 	用于获取 Symbol Property 键名的目标对象,类型: object
 * @returns: 返回目标对象 Symbol 组成的数组,类型: Array
 */

const obj = {}
const a = Symbol("name")
const b = Symbol("age")
obj[a] = "张三"
obj[b] = 20

console.log(obj)
const result = Object.getOwnPropertySymbols(obj)
console.log(result) //[Symbol(name), Symbol(age)]
