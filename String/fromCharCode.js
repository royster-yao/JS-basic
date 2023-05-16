// 静态 String.fromCharCode() 方法返回由指定的 UTF-16 代码单元序列创建的字符串。
// 语法：String.fromCharCode(num1 [, num2 [, num3 ...[, numN]]]);

/**
 * * String.fromCharCode(num1 [, num2 [, num3 ...[, numN]]])
 * @param {num}:一系列 UTF-16 代码单元的数字。范围介于 0 到 65535（0xFFFF）之间。大于 0xFFFF 的数字将被截断。不进行有效性检查。
 */
const result = String.fromCharCode(97, 65, 66)
console.log(result)
