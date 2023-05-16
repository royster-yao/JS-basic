// Object.isSealed() 方法用于检测指定对象是否已被密封。
// 语法：Object.isSealed(O);

/**
 * * Object.isSealed(O)
 * @param {O}: 指定用于检测的对象,类型: object
 * @returns: 返回 Boolean 类型的值表示用于检测的对象是否可扩展。
 */

const obj = {
  name: "张三",
  age: 18,
}
Object.defineProperties(obj, {
  name: {
    writable: false,
    enumerable: false,
    configurable: false,
  },
  age: {
    writable: false,
    enumerable: false,
    configurable: false,
  },
})
// 若将对象的 writable、enumerable、configurable 配置为false，并没有封装该对象，因为对后添加的属性没有限制
// Object.freeze(obj) // 冻结对象后,Object.isSealed()返回 true
// Object.preventExtensions(obj) // 阻止扩展并非封装,Object.isSealed()返回 false
// Object.seal(obj) // Object.seal() 封装对象后，Object.isSealed()返回 true
const result = Object.isSealed(obj)
console.log(result)

// 备注：
// 这个方法实际上会在现有对象上调用 Object.preventExtensions() 方法，
// 并把所有现有属性的 configurable 描述符置为 false。
