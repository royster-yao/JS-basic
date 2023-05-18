// Array.prototype.map() 根据传递的转换函数，更新给定数组中的每个值，并返回一个相同长度的新数组。它接受一个回调函数作为参数，用以执行转换过程。
// 语法：const new_arr = old_arr.map(callback = function(currentValue, index, array){} [, thisArg])

/**
 * * arr.map(callback , [, thisArg])
 * @param {arr}: 目标数组
 * @param {callback}: 用于遍历数组成员时执行的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 */

const arr = ["a", "b", "c", 1, 2, 3]
const result = arr.map((item) => {
  if (typeof item === "number") {
    return (item *= 2)
  } else {
    return (item = "any")
  }
})
console.log(result)
