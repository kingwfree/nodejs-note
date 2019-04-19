console.log(1)

setImmediate(()=>{console.log('5setImmediate')})

/** 
 * 
 * process.nextTick会插入事件队尾
 * 
*/

process.nextTick(()=>{
    console.log('3nextTick1')
    process.nextTick(()=>{
        console.log('4nextTick2')
    })
})

console.log(2)