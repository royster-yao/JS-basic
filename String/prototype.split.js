// split() 函数用于使用指定分隔符分割字符串，并返回分割后的若干个子字符串组成的数组。
// 语法：str.split( [separator [, limit]] )

/**
 * * str.split( [separator [, limit]] )
 * @param {str}: 目标字符串
 * @param {separator}: 指定表示每个拆分应发生的点的字符串。separator 可以是一个字符串或正则表达式。
 *                如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。
 *                如果在 str 中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。
 *                如果分隔符为空字符串，则将 str 原字符串中每个字符的数组形式返回。
 * @param {limit}: 可选，一个整数，限定返回的分割片段数量。当提供此参数时，split 方法会在指定分隔符的每次出现时分割该字符串，
 *                但在限制条目已放入数组时停止。
 *                如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。
 */

const str = "day and night"
const result = str.split("and")
console.log(result) //['day ', ' night']
