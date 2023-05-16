// 全局属性 NaN 的值表示不是一个数字（Not-A-Number）。
const result1 = NaN === NaN // false
typeof NaN // number
const result2 = isNaN(NaN) //true
console.log(result2)

const valueIsNaN = (val) => {
  return typeof val === "number" && val !== val
}
const result3 = valueIsNaN(1) // false
const result4 = valueIsNaN(NaN) // true
const result5 = valueIsNaN(Number.NaN) //true
console.log(result5)
