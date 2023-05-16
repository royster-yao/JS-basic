// indexOf() 函数用于查找子字符串在当前字符串中第一次出现的位置。
// 语法：str.indexOf( searchValue[, startIndex])

/**
 * * str.indexOf( searchValue[, startIndex])
 * @param {str}: 目标字符串
 * @param {searchValue}: 需要查找的子字符串,类型：string
 * @param {startIndex}: 可选，在当前字符串中查找的起始索引，默认为 0
 * @returns: 返回值为 Number 类型，返回子字符串在当前字符串中第一次查找到的起始位置（索引）
 */

const str = "JAVASCRIPT e AND TYPESCRIPT" // 会区分大小写
const result = str.indexOf("SCRIPT")
console.log(result)
