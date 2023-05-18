// Array.prototype.slice() 方法用于浅拷贝指定区间的数组成员。
// 语法：arr.slice( start [, end ] );

/**
 * * arr.slice( start [, end ] )
 * @param {arr}: 目标数组
 * @param {start}: 浅拷贝区间的开始索引
 * @param {end}: 浅拷贝区间的结束索引，浅拷贝不包括该索引所得值
 * @returns: 返回一个含有提取元素的新数组。
 */

const arr = [1, 2, 3, 5, 9, "1", "99"]
const newArr = arr.slice(3, 7)
console.log(newArr)
console.log(arr)
