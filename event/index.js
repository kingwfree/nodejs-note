const EventEmitter = require('events')

class CustomEvent extends EventEmitter{

}

const ce = new CustomEvent

//绑定事件
ce.on('test',()=>{
    console.log('test.')
})

setInterval(()=>{
    //触发事件
    ce.emit('test')
},500)

ce.once('test',()=>console.log(1))

setInterval(()=>{
    ce.emit('test')
},500)