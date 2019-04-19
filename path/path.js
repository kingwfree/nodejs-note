/**
 * 
 * normalize join resolve
 * basename extname dirname
 * parse format
 * sep delimiter win32 posix
 * 
 */
const {normalize,join,resolve,basename,dirname,extname,parse,format,sep,delimiter,win32,posix} = require('path')

console.log(normalize('/user//local/bin'))
console.log(normalize('/user//local/../bin'))

console.log(join('/user','local','bin'))
console.log(join('/user','local','../bin'))

//当前所在文件夹的绝对路径
console.log(resolve('./'))

const filePath = '/user/local/bin/no.txt'
//当前文件
console.log(basename(filePath))

//路径
console.log(dirname(filePath))

//当前文件的拓展名
console.log(extname(filePath))


const file = '\\user\\local\\bin\\file.txt'
//返回一个对象
console.log(parse(file))

console.log(format(parse(file)))

//系统的路径分割符
console.log('sep:',sep)
console.log('win sep:',win32.sep)
console.log('posix sep:',posix.sep)

console.log('PATH',process.env.PATH)

//系统的路径定界符
console.log("delimiter:",delimiter)
console.log("win delimiter:",win32.delimiter)
console.log("posix delimiter:",posix.delimiter)

console.log(process.env.PATH.split(delimiter))


/** 
 * 
 * __dirname、__filename总是返回当前文件的绝对路径
 * process.cwd 返回node指令所在的绝对路径
 * 
 * 
*/

