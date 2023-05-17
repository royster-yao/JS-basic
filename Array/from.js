// Array.from() 方法用于将一个类数组对象或可迭代对象转换成一个新的数组实例。
// (ES6)
// 语法：Array.from(arrayLike [, mapfn [, thisArg]])

/**
 * * Array.from(arrayLike [, mapfn [, thisArg]])
 * @param {arrayLike}: 想要转换成数组的伪数组对象或可迭代对象
 * @param {mapfn}: （可选）如果指定了该参数，新数组中的每个元素会执行该回调函数。
 * @param {thisArg}: （可选）执行回调函数 mapFn 时 this 对象
 * @returns: 返回一个新的数组实例。
 */

// 基本用法 转换类数组
function arrayLikeTurnArray() {
  const reallyArray = Array.from(arguments)
  return reallyArray
}
const result = arrayLikeTurnArray(1, 2, 3, 4)
console.log(result)

// 转换字符串
console.log(Array.from("foo"))

// Array from a Set
let s = new Set("foo", "abc")
console.log(Array.from(s))

// Array from a Map

let m = new Map([
  [1, 2],
  [2, 4],
  [4, 8],
])
console.log(Array.from(m))

// 使用箭头函数
console.log(Array.from([1, 2, 3], (item) => item * 2))
