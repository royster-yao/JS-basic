// slice() 方法提取字符串的某部分，并返回一个新的字符串。
// 语法：str.slice( startIndex [, endIndex] )

/**
 * * str.slice( startIndex [, endIndex] )
 * @param {str}: 目标字符串
 * @param {startIndex}: 指向字符串指定部分的开头的索引。
 * @param {endIndex}: 可选，指向字符串指定部分的结尾的索引（不包括该索引），默认到字符串的结尾。
 * @returns：返回一个从原字符串中提取出来的新字符串
 */

const str = "Hello World !"
const result = str.slice(6, 11) // 不包括 endIndex 索引上的字符串
const result1 = str.slice(-7, -2)
console.log(result)
console.log(result1)
