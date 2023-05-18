// Array.prototype.flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。
// 它与 Array.prototype.map() 连着深度值为 1 的 Array.prototype.flat() 几乎相同，但该方法通常在合并成一种方法的效率稍微高一些。
// (ES10)
// 语法：arr.flatMap(callback, [thisArg]);

/**
 * * arr.flatMap(callback, [thisArg])
 * @param {arr}；目标数组
 * @param {callback:{
 * currentValue：当前数组中处理的元素
 * index：（可选的）数组中正处理的当前元素的索引
 * array：（可选的）被调用的数组}}
 * ：	可以生成一个新数组中的元素的函数
 * @param {thisArg}：	（可选参数）执行 callback 函数时，使用的 this 值
 */

const arr = [1, 2, 3, 4, 5, [6, 7]]
const result = arr.flatMap((currentValue) => [currentValue * 2])
console.log(result)
console.log(arr)
