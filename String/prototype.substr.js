// substr() 函数用于返回当前字符串中一个连续的片段。
// 语法： str.substr( startIndex [, length] )

/**
 * * str.substr( startIndex [, length] )
 * @param {str}: 目标字符串
 * @param {startIndex}: 指向字符串指定部分的开头的索引。
 * @param {length}: 可选，返回的子字符串片段中包含的字符数。
 * @returns: 返回截取的字符串
 */

const str = "abcdefghijk"
const result = str.substr(5, 4)
console.log(result)
console.log(str)
