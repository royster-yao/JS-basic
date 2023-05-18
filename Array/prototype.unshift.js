// Array.prototype.unshift() 方法用于向当前数组的开头位置插入一个或多个指定的元素，并返回插入后的数组长度。
// 语法：arr.unshift( item1 [, items... ] )

/**
 * * arr.unshift( item1 [, items... ] )
 * @param {arr}: 目标数组
 * @param {item}: 添加到当前数组开头处的元素
 * @returns 返回插入元素后的当前数组的长度。
 */

const arr = [3, 4, 5, 6]
const result = arr.unshift(1, 2)
console.log(result)
