// String.raw() 是一个模板字符串的标签函数，它的作用类似于 Python 中的字符串前缀 r 和 C# 中的字符串前缀 @（还是有点区别的，
// 详见隔壁 Chromium 那边的这个 issue），是用来获取一个模板字符串的原始字符串的，比如说，
// 占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。

//语法： String.raw(callSite, ...substitutions)

/**
 * * String.raw(callSite, ...substitutions)
 * @param {callSite}: 一个模板字符串的“调用点对象”。类似 { raw: ['foo', 'bar', 'baz'] }。
 * @param {substitutions}: 任意个可选的参数，表示任意个内插表达式对应的值。
 * @returns: 给定模板字符串的原始字符串。
 */
const result = String.raw`Hi\n${2 + 3}!`
console.log(result)
