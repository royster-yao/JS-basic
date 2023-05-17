// Array.prototype.concat() 方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
// 语法：old_array.concat( item1[, itemN ] )

/**
 * * old_array.concat( item1[, itemN ] )
 * @param {old_array}：目标数组
 * @param {item1}: 添加到当前数组末尾处的数据项
 * @param {itemN}: 要添加到当前数组末尾处的其他项，可以有多个。
 * @returns: 返回合并后新的 Array 实例。
 */

const arr = [1, 2]
const result = arr.concat(Symbol("1"))
console.log(result)
console.log(arr)

const alpha = ["a", "b", "c"]
const alphaNumeric = alpha.concat(1, [2, 3])
console.log(alphaNumeric)
// Outputs: ['a', 'b', 'c', 1, 2, 3]
