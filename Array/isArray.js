// Array.isArray() 方法用于确定某个值是否是数组类型。
// 语法：Array.isArray(arg);

/**
 * * Array.isArray(arg)
 * @param {arg}:	需要检测的值
 * @returns:如果对象是 Array 的实例，则返回 true ；否则为 false。
 */

const str = "Hello"
const obj = { a: 1 }
const arr = [1, 2]
console.log(Array.isArray(str))
console.log(Array.isArray(obj))
console.log(Array.isArray(arr))
