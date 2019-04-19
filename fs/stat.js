const fs = require('fs')

fs.stat('./stat.js',(err,stats)=>{
    if(err)return err
    console.log(stats.isFile())
    console.log(stats.isDirectory())

    console.log(stats)
})

fs.rename('./test3.txt','test4.txt',err=>console.log(err))

fs.unlink('./test4.txt',err=>console.log(err))

