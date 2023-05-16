// Object.isExtensible() 方法用于检测指定对象是否可扩展。
// 语法：Object.isExtensible(O);

/**
 * * Object.isExtensible(O);
 * @param {O}: 指定用于检测的对象,类型: object
 * @returns: 返回 Boolean 类型的值表示用于检测的对象是否可扩展。
 */

const obj = {
  a: 1,
}
// 冻结该对象之后，该对象不可扩展
// Object.freeze(obj)

// 使用Object.preventExtensions()后对象无法再扩展
Object.preventExtensions(obj)

const result = Object.isExtensible(obj)
console.log(result)
