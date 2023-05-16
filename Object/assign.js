// Object.assign() 方法用于将所有可枚举自有 Property 的值从一个或多个源对象拷贝到目标对象。
// 语法： Object.assign(target, ...sources);
/**
 *  * Object.assign(target, ...sources)
 * @param {target}: 目标对象，类型： object
 * @param {sources}: 源对象,类型： object
 * @return : 返回目标对象
 */

const obj = {
  name: "张三",
  id: "202005002196",
  age: 21,
  gender: "男",
}

Object.defineProperty(obj, "id", {
  enumerable: false,
})

// Object.assign 方法只会拷贝源对象自身的并且可枚举的属性到目标对象。
const obj1 = Object.assign({}, obj)
console.log(obj1)

//如果目标对象中的属性具有相同的键，则属性将被源对象中的属性覆盖。
//后面的源对象的属性将类似地覆盖前面的源对象的属性。
const obj2 = Object.assign({ age: 20 }, obj)
console.log(obj2)
