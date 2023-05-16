// Object.preventExtensions() 方法用于令指定对象无法再添加新的属性。
// 语法： Object.preventExtensions(O);

/**
 * * Object.preventExtensions(O);
 * @param {O}: 将标记为不可扩展的对象,类型: object
 * @returns 返回处理后的对象。
 */

const obj = {
  name: "张三",
}
// 字面量方式创建的对象默认是可扩展的。
const result = Object.preventExtensions(obj)
// 但是可以改变
result.name = "李四"
console.log(result)

// 使用 Object.defineProperty 方法为一个可扩展的对象添加新属性会抛出异常。
// const nonExtensible = { removalbe: true }
// Object.preventExtensions(nonExtensible)
// Object.defineProperty(nonExtensible, "new", { value: 5678 })
