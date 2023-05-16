// Object.seal 方法用于标识指定对象为不可扩展，且所有现有 Property 均不可配置。
// 语法： Object.seal();

/**
 * * Object.seal(O)
 * @param {O}: 	将要被密封的对象,类型：object
 * @returns: 返回处理后的对象。
 */

const obj = {
  a: 1,
  b: "2",
}
console.log(Object.getOwnPropertyDescriptors(obj))
/**
 * {
 * a: {
    configurable: true
    enumerable: true
    value: 1
    writable: true
  },
  b: {
    configurable: true
    enumerable: true
    value: '2'
    writable: true
  }
 * }
 */
Object.seal(obj)
console.log(Object.getOwnPropertyDescriptors(obj))
