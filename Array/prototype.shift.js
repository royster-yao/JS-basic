// Array.prototype.shift() 方法用于移除数组第一个成员，并返回移除的元素。
// 语法: arr.shift();

/**
 * * arr.shift()
 * @param {arr}: 目标数组
 * @returns: 返回被移除的数组成员。如果该数组为空（没有任何元素），则返回 undefined。
 */

const arr = ["a", 1, 2, 3]
arr.shift()
console.log(arr)

// 空数组调用
const arr1 = []
const res = arr1.shift()
console.log(res)
