module.exports.test = 'B'

const A = require('./moduleA')

console.log('moduleB:',A.test)

module.exports.test='bb'