const { transformFileSync } = require('@babel/core');
const insertPlugin = require('./insert-plugin');
const path = require('path');

const { code } = transformFileSync(path.join(__dirname, '../sourceCode.js'), {
    plugins: [ insertPlugin ],
    parserOpts: {
        sourceType: 'unambiguous',
        plugins: ['jsx']
    }
})

console.log(code)

