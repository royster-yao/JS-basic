// Array.prototype.lastIndexOf() 方法用于查找指定数组成员在数组中最后一次出现的位置。
// 语法：arr.lastIndexOd( searchElement [, fromIndex ] )

/**
 * * arr.lastIndexOd( searchElement [, fromIndex ] )
 * @param {arr}: 目标数组
 * @param {searchElement}: 需要查找的数组元素
 * @param {fromIndex}: 	在当前数组中查找的起始索引，默认为 arr.length - 1 ,从后往前
 * @returns: 返回值为 Number 类型，返回数组元素在当前数组中最后一次查找到的起始位置（索引）。
 */

const arr = [1, 2, 3, 1, 2, 4]
const result = arr.lastIndexOf(3, 3)
console.log(result)
console.log(arr)
