// Array.prototype.keys() 方法用于获取一个新的 Iterator 对象，它包含数组中每个索引的键。
// 语法：arr.keys();

/**
 * * arr.keys()
 * @param {arr}: 目标数组
 * @returns 返回 一个新的 Array Iterator 对象。
 */

const arr = [1, 2, 3]
const result = arr.keys()
for (const item of result) {
  console.log(item)
}
console.log(arr)
