// Array.prototype.join() 方法将数组（或类数组对象）的所有成员连接到字符串中。
// 语法：const str = arr.jon(separator);

/**
 * * arr.jon(separator)
 * @param {separator}: 	将数组各元素连接成字符串的字符
 * @returns: 返回一个所有数组成员连接的字符串。如果数组长度为 0，则返回空字符串。
 */

const arr = ["1", "2", "3", "4", "5"]
const result = arr.join("")
console.log(result)
console.log(arr)
