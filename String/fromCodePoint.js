// String.fromCodePoint() 静态方法返回使用指定的代码点序列创建的字符串
// 语法：String.fromCodePoint(num1[, ...[, numN]])

/**
 * * String.fromCodePoint(num1[, ...[, numN]]
 * @param {num}:一串 Unicode 编码位置，即“代码点”
 * @returns: 使用指定的 Unicode 编码位置创建的字符串。
 */

const result = String.fromCodePoint(9731, 9733, 9842, 0x2f804)
console.log(result)
