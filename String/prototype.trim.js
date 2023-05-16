// trim() 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符（space, tab, no-break space 等）以及所有行终止符字符（如 LF，CR）。
// 语法：str.trim();

/**
 * * str.trim()
 * @param {str}: 目标字符串
 * @returns：返回去除两端空格的字符串
 */

// trim() 方法并不影响原字符串本身，它返回的是一个新的字符串。
const str = "  Hello World  "
const result = str.trim()
console.log(result)
console.log(str)
