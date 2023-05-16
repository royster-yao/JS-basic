// Object.getOwnPropertyDescriptor() 方法可以获取对象自有 Property 的某个 Attributes。
// 语法: Object.getOwnPropertyDescriptor(O, Property);

/**
 * * Object.getOwnPropertyDescriptor(O, Property)
 * @param {O}: 需要查找的目标对象,类型: object
 * @param {Property}: 目标对象的 Property,类型: string
 */

const obj = {
  a: 1,
  sayHello: () => {
    console.log("你好啊!")
  },
}
Object.defineProperty(obj, "a", {
  value: "one",
  writable: false,
  enumerable: true,
  configurable: false,
})
const result = Object.getOwnPropertyDescriptor(obj, "a")
console.log(result)
