// charAt() 方法从一个字符串中返回指定的字符。
// 语法：str.charAt(index);

/**
 * * str.charAt(index)
 * @param {str}: 目标字符串
 * @param {index}: 一个介于 0 和字符串长度减 1 之间的整数。 (0~length-1)。如果没有提供索引，默认值为 0。
 * @returns 返回指定的字符
 */

const str = "JAVASCRIPT"
const result = str.charAt(1) // 索引找到对应的字符则输出
const result0 = str.charAt() // 没有给参数则，则默认为0
const result1 = str.charAt(100) // 如果指定的 index 值超出了该范围，则返回一个空字符串 ''
console.log(result)
console.log(result0)
console.log(result1)
