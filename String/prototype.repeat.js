// repeat() 构造并返回一个新字符串，该字符串包含被连接在一起的指定数量的字符串的副本。
// 语法：str.repeat(count);

/**
 * * str.repeat(count)
 * @param {str}: 目标字符串
 * @param {count}: 	介于 0 与正无穷大之间的整数。表示在新构造的字符串中重复了多少遍原字符串。
 * @returns: 返回一个新字符串
 */
// 不改变源字符串
const str = "Hello "
const result = str.repeat(2.5) // 向下取整
console.log(str)
console.log(result)
