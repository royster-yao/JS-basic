// includes() 方法用于判断一个字符串是否包含在另一个字符串中，根据情况返回 true 或 false。
// 语法：str.includes( searchString [, startIndex] )

/**
 * * str.includes( searchString [, startIndex] )
 * @param {str}: 目标字符串
 * @param {searchString }: 要在字符串中搜索的字符串,类型：string
 * @param {startIndex }: 	从当前字符串指定索引位置开发搜索子字符串，默认为 0，包含该索引,类型：number
 * @returns: 包含则返回 true ,反之，则为 false
 */

const str = "JAVASCRIPT AND TYPESCRIPT"
const result = str.includes("TYPE", 10)
console.log(result)
