// endsWith() 用来判断当前字符串是否是以另外一个给定的子字符串 结尾 的，根据判断结果返回 true 或 false。
// 语法：str.endsWith( searchString [, length] )

/**
 * * str.endsWith( searchString [, length] )
 * @param {str}: 目标字符串
 * @param {searchString}: 	要搜索的子字符串
 * @param {length}: 	作为 str 的长度
 * @returns: 根据判断结果返回 true 或 false。
 */

// 这个方法帮助你确定一个字符串是否在另一个字符串的末尾。这个方法是大小写敏感的。
const str = "Hello World!"
const result = str.endsWith("World!")
console.log(result)
