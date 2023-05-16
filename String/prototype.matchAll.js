// matchAll() 方法返回一个包含所有匹配正则表达式的结果及分组捕获组的迭代器。
// 语法：str.matchAll(regexp);

/**
 * * str.matchAll(regexp)
 * @param {str}: 目标字符串
 * @param {regexp}: 正则表达式，如果传参非正则会通过构造函数转换
 */

const str = "table football foosball"
const regexp = RegExp("foo[a-z]*", "g")
const matches = str.matchAll(regexp)

for (const match of matches) {
  console.log(match[0], match.index, match.index + match[0].length)
}

const arr = Array.from(str.matchAll(regexp), (m) => m[0])
// ['football', 'foosball']
