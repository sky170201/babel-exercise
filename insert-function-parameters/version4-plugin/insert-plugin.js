
const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`)

// api 中有types、template等常用包的api
module.exports = function ({ types, template }) {
    return {
        visitor: {
            CallExpression(path, state) {
                // 给替换的节点做个标记，遍历到时直接return
                // console.log(path.container)
                // console.log(path.key)
                // console.log(path.listKey)
                if (path.node.isNew) {
                    return
                }
                const calleeName = path.get('callee').toString(); // 功能同generate(path.node.callee).code
                if (targetCalleeName.includes(calleeName)) {
                    const { line, column } = path.node.loc.start;
                    const newNode = template.expression(`console.log("${state.filename || 'unkown filename'}: (${line}, ${column})")`)()
                    newNode.isNew = true

                    if (path.findParent(path => path.isJSXElement())) {
                        path.replaceWith(types.arrayExpression([newNode, path.node]))
                        path.skip() // 跳过子节点处理
                    } else {
                        path.insertBefore(newNode)
                    }
                }
            }
        }
    }
}