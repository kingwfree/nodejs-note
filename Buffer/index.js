/**
 * 
 * 用于处理二进制数据流
 * 
 * 实例类似整数数组，大小固定
 * 
 * c++代码在V8堆外分配物理内存
 * 
 * Buffer 的大小在创建时确定，且无法更改
 * 
 */

// 创建一个长度为 10、且用零填充的 Buffer。
const buf1 = Buffer.alloc(10);

// 创建一个长度为 10、且用 0x1 填充的 Buffer。 
const buf2 = Buffer.alloc(10, 12);

const buf3 = Buffer.from([1,2,3])
const buf4 = Buffer.from('test')
const buf5 = Buffer.from('test','base64')

console.log(buf1,buf2,buf3,buf4,buf5)

/**
 * 类的方法
 * Buffer.byteLength()
 * Buffer.isBuffer()
 * Buffer.concat()
 * 
 */

console.log(Buffer.byteLength('test'))
console.log(Buffer.byteLength('测试'))

console.log(Buffer.isBuffer({}),Buffer.isBuffer(Buffer.from([1,2])))

const buf11 = Buffer.from('this')
const buf12 = Buffer.from([1,2])
const buf13 = Buffer.from('!')

//参数必须是array、buffer或uint8array类型之一
const buf14 = Buffer.concat([buf11,buf12,buf13])

console.log(buf14)

/**
 * 
 * buf.length
 * buf.toString()
 * buf.fill() 给buffer填充
 * buf.equals() 判断两个buffer的内容是否相等，不比较地址
 * buf.indexOf()
 * buf.copy()
 * 
 */

const buf15 = Buffer.from('this is a test')
const buf16 = Buffer.alloc(10);
buf16[0] = 2

//buffer申请的字节数
console.log(buf15.length,buf16.length)

console.log(buf15.toString('base64'))

const buf17 = Buffer.allocUnsafe(10)
console.log(buf17.fill(10,2,6)) //Buffer索引为2处开始填10，到6结束，索引为6处不填

const buf18 = Buffer.from('test')
const buf19 = Buffer.from('test')
const buf20 = Buffer.from('test213')

console.log(buf18.equals(buf19))
console.log(buf18.equals(buf20))
console.log(buf18.indexOf('s'));
console.log(buf18.indexOf('6'));

const {StringDecoder} = require('string_decoder')
const decoder = new StringDecoder('utf-8')



const buf21 = Buffer.from('中文字符串！')

for(let i=0;i<buf21.length;i+=5){
    const b = Buffer.alloc(5);
    buf21.copy(b,0,i)
    //console.log(b.toString())
    console.log(decoder.write(b));
}
