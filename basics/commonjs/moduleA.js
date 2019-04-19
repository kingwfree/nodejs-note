module.exports.test = 'A' 

const B = require('./moduleB')

console.log('moduleA:',B.test)

module.exports.test = 'aa'