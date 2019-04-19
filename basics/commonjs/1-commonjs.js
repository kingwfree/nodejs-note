/** 
 * 每个文件是一个模块，有自己的作用域
 * 在模块内部module变量代表模块本身
 * module.exports属性代表模块对外接口
 * 
 * require 支持js json node的扩展名，不写依次尝试
 * 不写路径则认为是build-in模块或者各级node_modules内的第三方模块
 * 
 * module被加载的时候执行，加载后缓存
 * 
 * 一旦出现某个模块被循环加载，就只输出已经执行的部分，还没执行的部分不输出
*/
console.log('this is 1-commonjs');

const test = '12'

module.exports.test = test

