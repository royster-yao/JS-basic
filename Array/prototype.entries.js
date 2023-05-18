// Array.prototype.entries() 方法返回一个新的 Array Iterator 对象，该对象包含数组中每个索引的键值对。
// 语法：arr.entries();

/**
 * * arr.entries()
 * @param {arr}: 目标数组
 * @returns: 返回一个新的 Array 迭代器对象。Array Iterator 是对象，它的原型上有一个 next() 方法，可用于便利迭代器取得原数组的键值对
 */

const arr = [1, 2, 3, 4, 5, 6]
const result = arr.entries()
for (const item of result) {
  console.log(item)
}
console.log(result)
console.log(arr)
