// Object.defineProperties() 方法用于为一个对象定义 Properties 和/或修改已有的 Properties 的 Attributes。
// 语法: Object.defineProperties(O, Properties);
/**
 * * Object.defineProperties
 * @param {o} :添加或修改 Properties 的目标对象,类型: object
 * @param {Properties} :要定义其可枚举属性或修改的属性描述符的对象，类型: object
 */

const abc = {
  a: 1,
  b: 2,
  c: 3,
}
Object.defineProperties(abc, {
  a: {
    value: "one",
    writable: false,
    enumerable: false,
    configurable: false,
  },
  e: {
    value: 4,
  },
  f: {
    value: 5,
  },
})

console.log(abc)

// 后添加的属性 writable,enumerable,configurable的默认值为 false
for (const item in abc) {
  console.log(item)
}
