// replace() 函数用于使用指定字符串替换当前字符串中匹配指定正则表达式模式的子字符串，并返回完成替换后的字符串。
// 语法：str.replace(pattern, replacement);

/**
 * * str.replace(pattern, replacement)
 * @param {str}: 目标字符串
 * @param {pattern}: 指定的正则表达式模式的 RegExp 对象的实例。也可以是字符串。类型：string / RegExp
 * @param {replacement}: 用于替换的字符串，或返回替换字符串的函数。类型：	string / function
 * @returns: 返回完成替换后的字符串。
 */

const str = "yes yes up"
const result = str.replace(/yes/gi, "day")
console.log(result)
console.log(str)
