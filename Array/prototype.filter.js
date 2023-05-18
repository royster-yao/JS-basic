// Array.prototype.filter() 方法创建一个新数组，其包含通过所提供函数实现的测试的所有元素。
// 语法: arr.filter( callback = function (currentValue, index, arr) {} [, thisArg ] )

/**
 * * arr.filter( callback = function (currentValue, index, arr) {} [, thisArg ] )
 * @param {arr}: 目标数组
 * @param {callback}: 用于判定数组成员的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 * @returns: 返回一个新的通过测试的成员的集合的数组。
 */

const arr = [1, 2, 3, "a", "b", "c", { one: 1 }, { two: 2 }, { three: 3 }]
const result = arr.filter((item) => typeof item === "string")
console.log(result)
console.log(arr)
