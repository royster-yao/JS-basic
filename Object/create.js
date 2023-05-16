// Object.create() 方法用于创建指定对象为原型对象的新对象。
// 语法: Object.create(proto, [propertiesObject])

/**
 *  * Object.create()
 * @param {proto}： 新创建对象的原型对象
 * @param {propertiesObject}： 可选,如果该参数被指定且不为 undefined，则该传入对象的自有可枚举属性（即其自身定义的属性，而不是其原型链上的枚举属性）将为新创建的对象添加指定的属性值和对应的属性描述符。
 * 这些属性对应于 Object.defineProperties() 的第二个参数。
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

const obj1 = Object.create(obj)
console.log(obj1.name)
console.log(obj1.id)
