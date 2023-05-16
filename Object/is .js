// Object.is() 方法用于判断两个值是否是相同的值。
// 语法: Object.is(value1, value2);

/**
 * * Object.is(value1, value2)
 * @param {value1}: 比较值 1,类型：any
 * @param {value2}: 比较值 2,类型：any
 * @returns: 返回判断表达式的结果。
 */

const obj = {
  age: 18,
}
const obj1 = {
  age: 18,
}

// 下列任何一项成立，则两个值相同：
// 两个值均为 undefined  true
const result = Object.is(undefined, undefined)

// 两个值均为 null true
const result1 = Object.is(null, null)

// 两个值都是 true 或 false  true
const result2 = Object.is(false, false)

// 两个值是由相同个数的字符按照相同顺序组成的字符串
const result3 = Object.is("abc", "abc")

// 两个值指向同一个对象
const result4 = Object.is(obj, obj)

// 两个值都是数字并且都是正零、都是负零、都是NaN，都是除零和 NaN 外的其他同一个数字
const result5 = Object.is(NaN, NaN)
console.log(result5)

// 备注
// 这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换，然后才进行相等性比较，
//（所以才会有类似 "" == false 等于 true 的现象），但 Object.is 不会做这种类型转换。
// 这与 === 运算符的判定方式也不一样。
// === 运算符（和 == 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。
