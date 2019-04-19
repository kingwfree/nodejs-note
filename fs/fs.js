const fs = require('fs')
const {dirname} = require('path')

fs.readFile('./test1.txt',(err,data)=>{
    //在Buffer(缓冲)里
    console.log(data,data.toString())
})

fs.readFile('./test1.txt','utf8',(err,data)=>{
    if(err)return err;
    console.log(data)
})

const data = 'this is a test'
const buf = Buffer.from('this is a test')

fs.writeFile('./test2.txt',data,'utf8',err=>console.log(err))
//如果使用buf则不用写编码格式
fs.writeFile('./test3.txt',buf,err=>console.log(err))

const rs = fs.createReadStream('./fs.js')

rs.pipe(process.stdout)





const ws = fs.createWriteStream('./test.txt');

const time = setInterval(() => {
    const num = parseInt(Math.random()*10)
    if(num < 9){
        //参数必须是string或buffer类型之一
        ws.write(num.toString())
    }else{
        clearInterval(time)
        ws.end()
    }
}, 200);


ws.on('finish',()=>{
    console.log('done!')
})




const {promisify} = require('util')

//返回一个promise对象
const read = promisify(fs.readFile)

read('./fs.js').then(data=>{
    console.log(data.toString())
})

async function test() {
    try{
        const con = await read('./test1.txt');
        console.log(con)
    }catch(e){
        console.log(e)
    }
}
test()