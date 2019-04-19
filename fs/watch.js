const fs = require('fs')
//监听
fs.watch('./',{
    recursive:true //是否递归
},(event,filename)=>{ //变化类型 文件名
    console.log(event,filename)
})