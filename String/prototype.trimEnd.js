// trimEnd() 从字符串的末端移除空白字符，trimRight 是这个方法的别名。
// 语法：str.trimEnd();

/**
 * * str.trimEnd()
 * @param {str}: 目标字符串
 * @returns：返回去除末端空格的字符串
 */

// trimEnd() 方法并不影响原字符串本身，它返回的是一个新的字符串。
const str = "   Hello World  "
const result = str.trimEnd()
console.log(result, "----", result.length)
console.log(str, "----", str.length)
