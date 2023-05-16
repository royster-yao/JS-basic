// search() 函数用于使用指定的正则表达式查找指定子字符串在当前字符串中第一次出现的位置。
// 语法：str.search(regexp);

/**
 * * str.search(regexp)
 * @param {str}: 目标字符串
 * @param {regexp}：包含正则表达式模式的 RegExp 对象的实例。也可以是包含正则表达式模式的变量名或字符串。
 * @returns: 如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引 如果没有查找到任何匹配，则返回 -1
 */

const str = "1 day day up"
const result = str.search(/day/gi)
const result1 = str.search(/every/gi)
console.log(result)
console.log(result1)
