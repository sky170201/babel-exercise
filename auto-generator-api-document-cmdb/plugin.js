const renderer = require('./renderer')
const fs = require('fs-extra')
const path = require('path')

function generate(docs, format = 'markdown') {
    if (format === 'markdown') {
        return {
            ext: '.md',
            content: renderer.markdown(docs)
        }
    }
}


module.exports = (api, options) => {
    return {
        pre(file) {
            // 保存参数并传递
            file.set('docs', [])
        },
        visitor: {
            FunctionDeclaration(path, state) {
                const docs = state.file.get('docs')
                // node={functionName, functionParams, ...}
                const node = {}
                node.functionName = path.get('id').toString()
                node.functionParams = path.get('params').map((NodePath) => {
                    return {
                        name: NodePath.toString()
                    }
                })
                path.traverse({
                    ObjectExpression(p, s) {
                        const properties = p.get('properties').forEach(prop => {
                            // 
                            const key = prop.get('key').toString()
                            let preValue = prop.get('value')
                            let value = ''
                            // 当遇到模板字符串时的特殊处理
                            if (api.types.isTemplateLiteral(preValue)) {
                                const expressions = preValue.get('expressions').map(expressNode => {
                                    return `{${expressNode.toString()}}`
                                })
                                // 处理模板字符串，需要先将${}表达式替换为{placehold}
                                value = preValue.node.quasis.map((item) => item.value.raw).join('{placehold}').replace(/{(.+?)}/g, (match, target) => {
                                    return expressions.shift()
                                })
                            } else {
                                // 普通字符直接取value或name作为值
                                value = prop.get('value').node.value || prop.get('value').node.name
                            }
                            node[key] = value
                        })
                    }
                })
                docs.push(node)
                // 设置会docs往下传递
                state.file.set('docs', docs)
            }
        },
        post(file) {
            docs = file.get('docs')
            // 生成模板字符串
            const res = generate(docs, options.format)
            // 写入文件
            fs.ensureDirSync(options.outputDir)
            fs.writeFileSync(path.join(options.outputDir, options.fileName+res.ext), res.content)
        }
    }
}