// startsWith() 方法用来判断当前字符串是否以另一个给定的子字符串开头，并根据判断结果返回 true 或 false。
// 语法: str.startsWith( searchString [, length] )

/**
 * * str.startsWith( searchString [, length] )
 * @param {str}: 目标字符串
 * @param {searchString}: 要搜索的子字符串
 * @param {length}: 	开始搜索 searchString 的开始索引，默认为 0
 * @returns: 结果返回 true 或 false。
 */

const str = "hello world!"
const result = str.startsWith("hel")
console.log(result)
