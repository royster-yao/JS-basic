// Array.prototype.splice() 方法用于从当前数组中移除一部分连续的元素。如有必要，还可以在所移除元素的位置上插入一个或多个新的元素。该函数以数组形式返回从当前数组中被移除的元素。
// 语法：arr.splice( start, deleteCount [,items... ] )

/**
 * * arr.splice( start, deleteCount [,items... ] )
 * @param {arr}: 目标数组
 * @param {start}: 	数组中移除元素操作的起点索引，从 0 开始。
 * @param {deleteCount}: （可选）需要移除的元素个数。
 * @param {items}: 要添加到数组中元素被移除位置的新元素，可以有多个。
 */
// 返回值：
// 返回从当前数组中被移除的元素所组成的新的数组。
// 如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
// 当移除数组中的元素时，数组的 length 属性也会随之改变。一般而言，数组的 length 属性将会减 N（N 为实际移除的元素个数）。

// 在索引为 2 的位置插入 e。
const arr = ["a", "b", "c", "d"]
arr.splice(2, 0, "e")
console.log(arr)

// 从索引为 2 的位置删除一项（也就是 c 这一项）。
const arr1 = ["a", "b", "c", "d"]
arr1.splice(2, 1)
console.log(arr1)
