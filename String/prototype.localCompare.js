// localCompare() 方法返回一个数字来指示一个参考字符串是否在排序顺序前面或之后或与给定字符串相同。
// 语法：str.localCompare( compareString [, locales [, options ]])

/**
 * * str.localCompare( compareString [, locales [, options ]])
 * @param {str}: 目标字符串
 * @param {compareString}:用于比较的字符串
 * @param {locales}:可选，用于表示一种或多种语言或区域的符合 BCP 47 标准的字符串或字符串数组。
 * @param {options}: 配置对象
 */

const str = "Hello"
const result = str.localeCompare("He")
console.log(result)
