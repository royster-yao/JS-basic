// Array.prototype.forEach() 方法用于迭代数组的每项成员。
// arr.forEach( callbackfn [, thisArg ] )

/**
 * * arr.forEach( callbackfn [, thisArg ] )
 * @param {arr}: 目标数组
 * @param {callbackfn}: 用于遍历数组成员时执行的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 */

const arr = ["a", "b", "c", "d", "e", "f"]
const result = arr.forEach((item, index) => {
  console.log("index: " + index, "item: " + item)
})
console.log(result)
console.log(arr)
