// 数组检测
const arr = [1, 2, 3, 4, 5]
// typeof 操作符
const result = typeof arr // object
console.log("typeof----", result)

// instanceof 操作符
const result1 = arr instanceof Array // true
console.log("instanceof----", result1)
const result2 = arr instanceof Object // true
console.log("instanceof----", result2)

// Array.isArray()
const result3 = Array.isArray(arr) // true
console.log("Array.isArray----", result3)

// Object.prototype.toString（通用方法）
function isArray(item) {
  return Object.prototype.toString.call(item) === "[object Array]"
}
console.log("Object.prototype.toString----", isArray(arr))
