// Object.getOwnPropertyDescriptors() 方法用于获取一个对象的所有自身 Property 的 Attributes。
// ES8
// 语法: Object.getOwnPropertyDescriptors(obj);

/**
 * * Object.getOwnPropertyDescriptors(obj)
 * @param {obj} :用于获取 Property 的 Attributes 的对象,类型：object
 * @returns :返回一个描述需要获取 Property 的 Attributes 对象的对象
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

const result = Object.getOwnPropertyDescriptors(obj)
console.log(result)
/*
{
  a: {
    value: "one",
    writable: false,
    enumerable: true,
    configurable: false,
  },
  sayHello: {
    value: () => {
      console.log("你好啊!")
    },
    writable: true,
    enumerable: true,
    configurable: true,
  }
}
*/
