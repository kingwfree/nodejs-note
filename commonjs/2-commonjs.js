//1-commonjs第一次require被加载一次，第二次require使用缓存
//1-commonjs里的console.log语句只被执行了一次
const test = require('./1-commonjs');
const a = require('./1-commonjs');