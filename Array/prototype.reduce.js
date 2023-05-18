// Array.prototype.reduce() 方法接收一个函数作为累加器，数组中的每个值（从左到右）开始缩减，最终计算为一个值。对空数组时不会执行回调函数。
// 语法：arr.reduce(callbackfn [, initialValue]);

/**
 * * arr.reduce(callbackfn [, initialValue])
 * @param {arr}: 目标数组
 * @param {callbackfn: {
 *  previousValue：累加器累加回调的返回值，它是上一次调用回调时返回的累积值，或 initialValue
 *  currentValue：当前数组中处理的元素
 *  index：数组中正处理的当前元素的索引
 *  array：被调用的数组
 * }}；回调函数，用于遍历数组成员时执行
 * @param {initialValue}: （可选）累加器初始值，用作第一个调用回调函数的第一个参数的值。
 *      如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用将报错。
 * @returns: 返回函数累计处理的结果。
 */

// 求和
const arr = [1, 2, 3, 4, 5]
const result = arr.reduce((pre, item) => {
  return pre + item
}, 0)
console.log("result ", result)
console.log(arr)

// 求积
const product = [1, 2, 3, 4, 5].reduce((acc, item) => acc * item, 1)
console.log(product)

// 数组最大值
const max = [1, 2, 3, 4, 5].reduce((acc, item) => (acc > item ? acc : item), 0)
console.log(max)

// 聚合为字符串
const arr1 = [
  { key: "foo", value: 1 },
  { key: "bar", value: 2 },
  { key: "baz", value: 3 },
]
const res = arr1.reduce((acc, { key, value }) => {
  return acc + `${key}:${value}`
}, {})
console.log(res)

// 聚合为对象
const arr2 = [
  { id: 1, type: "a", name: "foo" },
  { id: 2, type: "b", name: "bar" },
  { id: 3, type: "c", name: "baz" },
]

const res1 = arr2.reduce((acc, { id, type, name }) => {
  acc[id] = { type, name }
  return acc
}, {})
console.log(res1)

// 二维数组扁平化
const arr3 = [[0, 1], [2, 3], [4, 5], 6]
const res2 = arr3.reduce((acc, item) => acc.concat(item), [])
console.log(res2)

// 计算数组成员次数
const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"]
const countedNames = names.reduce((allNames, item) => {
  if (item in allNames) {
    allNames[item]++
  } else {
    allNames[item] = 1
  }
  return allNames
}, {})
console.log(countedNames)
