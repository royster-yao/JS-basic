// Array.prototype.flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
// (ES10)
// 语法：arr.flat([depth]);

/**
 * * arr.flat([depth])
 * @param {arr}；目标数组
 * @param {depth}：	（可选参数）指定要提取嵌套数组的结构深度，默认值为 1
 * @returns: 返回一个包含将数组与子数组种所有元素的新数组。
 */

const arr = [1, [2, 3], [4, 5, [6, 7]]]
const result = arr.flat(2)
console.log(result)
console.log(arr)

const arr2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]
console.log(arr2.flat(Infinity))
