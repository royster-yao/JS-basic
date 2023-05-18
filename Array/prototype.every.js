// every() 方法遍历数组中每个成员，通过回调函数判断是否所有成员都满足特定条件。
// 语法：arr.every( predicate [, thisArg ] )

/**
 * * arr.every( predicate [, thisArg ] )
 * @param {arr}: 目标数组
 * @param {predicate}: 	用于判定数组成员的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 * @returns: 返回当所有数组元素满足回调函数的判断时返回 true，否则返回 false。
 */

const arr = [1, 2, 3, 4, 5, 6]
const result = arr.every((item) => typeof item === "number")
console.log(result)
console.log(arr)
