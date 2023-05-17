// Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
// 语法：Array.of( ele0[, ele1[, ...[, eleN ] ] ] )

/**
 * * Array.of( ele0[, ele1[, ...[, eleN ] ] ] )
 * @param {ele}: 任意个参数，将按 顺序 成为返回数组中的元素。
 * @returns：新的 Array 实例
 */

const result = Array.of(
  1,
  3,
  5,
  7,
  { a: 1, b: 2 },
  [1, 2, 3],
  "hello",
  Symbol("1")
)
console.log(result)
