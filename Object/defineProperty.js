// Object.defineProperty() 方法用于为一个对象定义一个自有 Property 和/或修改已有 Property 的 Attributes。
// 语法: Object.defineProperty(O, P, Attributes);
/**
 * * Object.defineProperty(O, P, Attributes)
 * @param {O}: 定义或修改 Property 的目标对象,类型: object
 * @param {p}: 需要定义的 Property 键名,类型: string
 * @param {Attributes}: 被定义或修改的 Attributes,类型: object
 */

const obj = {}
Object.defineProperty(obj, "a", {
  value: 100,
  writable: true,
  enumerable: true,
  configurable: true,
})
console.log(obj)

// 后添加的属性 writable,enumerable,configurable的默认值为 false
for (const key in obj) {
  console.log(key)
}
