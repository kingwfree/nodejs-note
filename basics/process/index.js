/** 
 * argv
 * argv0
 * execArgv
 * execPath
*/

const {argv,argv0,execArgv,execPath,env} = process

argv.forEach(element => {
    console.log(element)
    //D:\nodejs\node.exe 启动项目的执行程序的路径，也就是安装node的路径
    //G:\nodejs-note\process\index 这个被启动文件的路径
});

console.log(process.cwd())//当前process执行的路径

