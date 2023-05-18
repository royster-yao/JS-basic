// Array.prototype.find() 方法返回数组中满足提供的判定函数的第一个成员。
// 语法：arr.find( callback [, thisArg ] )

/**
 * * arr.find( callback [, thisArg ] )
 * @param {arr}: 目标数组
 * @param {callback}: 用于判定数组成员的回调函数
 * @param {thisArg}: 执行回调函数的 this 值
 * @returns: 当遍历到的数组成员通过回调函数的判定时，返回数组中该成员，否则返回 undefined。
 */

// 用对象的属性查找数组里的对象

const arr = [
  { name: "a", quantity: 2 },
  { name: "b", quantity: 0 },
  { name: "c", quantity: 5 },
]
const getItemByName = (key) => {
  return (arr) => {
    return arr.name === key
  }
}
const result = arr.find(getItemByName("a"))
console.log(result)

// 寻找数组中的质数

// const isPrime = (element) => {
//   let start = 2
//   while (start <= Math.sqrt(element)) {
//     if (element % start++ < 1) {
//       return false
//     }
//   }
//   return element > 1
// }
// console.log([4, 6, 8, 12].find(isPrime))
