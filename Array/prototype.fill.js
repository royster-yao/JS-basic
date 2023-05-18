// Array.prototype.fill() 方法用于将一个固定值填充到数组中从起始索引到终止索引内的全部元素。
// 语法：arr.fill( value [, start [, end] ] )

/**
 * * arr.fill( value [, start [, end] ] )
 * @param {arr}: 目标数组
 * @param {value}: 填充数组元素的值
 * @param {start}：起始索引，默认为 0。
 * @param {end}：	结束索引，默认为 arr.length 。
 * @returns: 返回填充后的数组
 */

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const res = arr.fill(4, 1, 4)
console.log(res)
