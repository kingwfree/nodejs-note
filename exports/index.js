/**
 * 
 * 不能改变exports的指向，
 * exports默认指向为module.exports,若是给exports
 * 赋值则exports指向改变
 * 
 */

 //exports = {a:'a'} 这是错误的
 module.exports = {b:'b'} //这是正确的