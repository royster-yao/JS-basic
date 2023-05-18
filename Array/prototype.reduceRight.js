// Array.prototype.reduceRight() 方法接收一个函数作为累加器和数组的每个值（从右到左）将其减少为单个值。
// 语法：arr.reduceRight( callback [, initialValue])

/**
 * * arr.reduceRight( callback [, initialValue])
 * @param {arr}: 目标数组
 * @param {callback}: 回调函数，用于遍历数组成员时执行
 * @param {initialValue}: （可选）累加器初始值，用作第一个调用回调函数的第一个参数的值。
 *      如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用将报错。
 * @returns:返回函数累计处理的结果。
 */

const total = [0, 1, 2, 3].reduceRight((a, b) => a + b)

console.log(total) // 6
