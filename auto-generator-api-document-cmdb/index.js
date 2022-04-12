const { transformFromAstSync } = require('@babel/core')
const parser = require('@babel/parser')
const fs = require('fs')
const path = require('path')
const autoDocumentPlugin = require("./plugin")

fs.readdirSync('./auto-generator-api-document-cmdb/apis').forEach((dir) => {
    fs.readdirSync(`./auto-generator-api-document-cmdb/apis/${dir}`).forEach((file) => {
        const res = fs.readFileSync(`./auto-generator-api-document-cmdb/apis/${dir}/${file}`)
        const sourceCode = res.toString()
        const ast = parser.parse(sourceCode, {
            sourceType: 'unambiguous'
        })
        
        transformFromAstSync(ast, sourceCode, {
            plugins: [
                [
                    autoDocumentPlugin, {
                        outputDir: path.resolve(__dirname, './docs'),
                        format: 'markdown',
                        fileName: `${dir}-${file.split('.')[0]}`
                    }
                ]
            ]
        })
    })
})
