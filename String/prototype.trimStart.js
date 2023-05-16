// trimStart() 从字符串开头删除空格， trimLeft 是这个方法的别名。
// 语法：str.trimStart();

/**
 * * str.trimStart()
 * @param {str}: 目标字符串
 * @returns：返回去除开头空格的字符串
 */

// trimEnd() 方法并不影响原字符串本身，它返回的是一个新的字符串。
const str = "   Hello World  "
const result = str.trimStart()
console.log(result, "----", result.length)
console.log(str, "----", str.length)
