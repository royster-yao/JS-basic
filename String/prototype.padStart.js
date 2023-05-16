// String.prototype.padStart() 方法用另一个字符串填充当前字符串（重复，如果需要的话），以便产生的字符串达到给定的长度。填充从当前字符串的开始（左侧）应用的。
// (ES8)
// 语法：str.padStart(maxLength [, fillString]);

/**
 * * str.padStart(maxLength [, fillString])
 * @param {str}: 目标字符串
 * @param {maxLength}: 	当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
 * @param {fillString}: 	（可选）填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。
 */

const str = "yao"
const result = str.padStart("9", "hello ")
console.log(result)
