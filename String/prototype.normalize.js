// normalize() 方法会按照指定的一种 Unicode 正规形式将当前字符串正规化。（如果该值不是字符串，则首先将其转换为一个字符串）。
// 语法：str.normalize([form]);

/**
 * * str.normalize([form])
 * @param {str}: 目标字符串
 * @param {form}: 可选，四种 Unicode 正规形式（Unicode Normalization Form），默认值为 NFC
 *                    可选值： NFC、NFD、NFKC、NFKD
 */

const str = "\u1E9B\u0323"
// str.normalize("NFC")
// str.normalize("NFD")
str.normalize("NFKC")
console.log(str)
