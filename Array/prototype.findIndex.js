// findIndex()方法返回数组中满足提供的测试函数的第一个元素的索引。否则返回-1。
// 语法：arr.findIndex( callback [, thisArg ])

/**
 * * arr.findIndex( callback [, thisArg ])
 * @param {arr}: 目标数组
 * @param {callback}: 用于判定数组成员的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 * @returns: 满足提供的测试函数的第一个元素的索引。否则返回-1。
 */

const arr = [1, 2, 3, 4, 5, 12, 22, 2, 2, 2]
const result = arr.findIndex((item) => item === 2)
console.log(result)
console.log(arr)
