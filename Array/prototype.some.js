// Array.prototype.some() 方法用于判定数组中是否存在一个成员符合判定函数判定条件。
// 语法: arr.some( callback [, thisArg ] )

/**
 * * arr.some( callback [, thisArg ] )
 * @param {arr}: 目标数组
 * @param {callback}: 	用于判定数组成员的回调函数
 * @param {thisArg}: 	执行回调函数的 this 值
 */

const arr = [2, 5, 8, 1, 4]
const result = arr.some((item) => item > 9)
console.log(result)
console.log(arr)
