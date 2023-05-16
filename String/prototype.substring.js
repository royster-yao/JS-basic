// substring() 函数用于返回当前字符串中一个连续的片段。
// 语法：str.substring(startIndex [, indexEnd])

/**
 * * str.substring(startIndex [, indexEnd])
 * @param {str}: 目标字符串
 * @param {startIndex}: 指向字符串指定部分的开头的索引。
 * @param {indexEnd}: 可选，指向字符串指定部分的结尾的索引（不包括该索引）。
 * @returns: 返回截取的字符片段
 */

const str = "abcdrfghijk"
const result = str.substring(3, 8) // 左闭右开
console.log(result)
console.log(str)
