// Object.entries() 方法用于枚举指定对象并返回以键值对组成的数组为元素的二维数组。(ES8)
// 语法: Object.entries(obj);
/**
 * * Object.entries(obj)
 * @param {obj} :用于枚举的对象,类型: object
 * @returns : 返回给定对象自身可枚举 Property 的键值对数组。
 */

const obj = {
  name: "张三",
  id: "202005002196",
  age: 21,
  gender: "男",
  sayHello: () => {
    console.log("你好啊!")
  },
}

Object.defineProperty(obj, "id", {
  enumerable: false,
})

const arr = Object.entries(obj)
console.log(arr) // [['name',''张三],['age',21],['gender','昆明'],['sayHello,()=>{console.log('你好啊)}]]
arr[3][1]()
