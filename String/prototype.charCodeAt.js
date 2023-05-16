// charCodeAt() 方法返回 0 到 65535 之间的整数，
// 表示给定索引处的 UTF-16 代码单元（在 Unicode 编码单元表示一个单一的 UTF-16 编码单元的情况下，UTF-16 编码单元匹配 Unicode 编码单元。
// 但在——例如 Unicode 编码单元 > 0x10000 的这种——不能被一个 UTF-16 编码单元单独表示的情况下，
// 只能匹配 Unicode 代理对的第一个编码单元） 。如果你想要整个代码点的值，使用 codePointAt()。
// 语法： str.charCodeAt(index);

/**
 * * str.charCodeAt(index)
 * @param {str}: 目标字符串
 * @param {index}: 一个大于等于 0，小于字符串长度的整数。如果不是一个数值，则默认为 0。
 * @returns: 返回值表示字符串对象指定索引处的字符的 Unicode 编码；如果索引超出范围，则返回 NaN。
 */

console.log("aABC".charCodeAt(0))
