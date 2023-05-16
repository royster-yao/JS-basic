// Object.isFrozen() 方法用来检测指定对象是否已被冻结。
// 语法：Object.isFrozen(O)；

/**
 * * Object.isFrozen(O)
 * @param {O}: 指定用于检测的对象,类型：object
 * @returns: 返回 Boolean 类型的值表示用于检测的对象是否被冻结。
 */

const obj = {
  name: "张三",
  age: 18,
}
//Object.preventExtensions(obj) // 阻止扩展并不是冻结对象
Object.freeze(obj)
const result = Object.isFrozen(obj)
console.log(result)
// Object.freeze(obj)

// 被冻结的对象不可扩展，所有 Property 均不可配置，
// 且所有数据属性（即没有 getter 或 setter 组件的访问器的属性 ）都是不可写的。
// 即使配置了属性的 writable 为 true,Object.freeze 方法实际上会在现有对象上调用 Object.seal() 方法，
// 并把所有现有属性的 writable 描述符置为 false。
