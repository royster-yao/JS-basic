// match()函数用于使用指定的正则表达式模式在当前字符串中进行匹配查找，并返回数组形式的查找结果。
// 语法：str.match(regexp);

/**
 * * str.match(regexp)
 * @param {str}: 目标字符串
 * @param {regexp}: 包含正则表达式模式的 RegExp 对象的实例。也可以是包含正则表达式模式的变量名或字符串。
 */

const str = "Hello World!"
const result = str.match()
console.log(result) //['', index: 0, input: 'Hello World', groups: undefined]

const result1 = str.match(/\b\w/gi)
console.log(result1)

/**
 * 如果参数 regExp 没有全局标志 g，则 match() 函数只查找第一个匹配，并返回包含查找结果的数组，该数组对象包含如下成员：
    索引 0：存放第一个匹配的子字符串。
    属性 index：匹配文本在字符串中的起始索引位置。
    属性 input：整个字符串对象（str）。

* 如果参数 regExp 设有全局标志 g，则 match() 函数会查找所有的匹配，返回的数组不再有 index 和 input 属性，其中的数组元素就是所有匹配到的子字符串，形如：
    索引 0：存放第一个匹配的子字符串(如果存在的话)。
    索引 1：存放第二个匹配的子字符串(如果存在的话)。
    ……
    索引 N-1：存放第 N 个匹配的字符串(如果存在的话)。
 */
