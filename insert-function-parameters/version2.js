const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const generate = require('@babel/generator').default;
const types = require('@babel/types');

const sourceCode = `
    console.log(1);

    function func() {
        console.info(2);
    }

    export default class Clazz {
        say() {
            console.debug(3);
        }
        render() {
            return <div>{console.error(4)}</div>
        }
    }
`;

const ast = parser.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
});

/**
 * 1、path.node.callee也是一个ast节点，用generate(path.node.callee)生成源码console.xxx
 * 2、判断targetCalleeName是否是['console.log', 'console.info', 'console.error', 'console.debug']
 */
const targetCalleeName = ['log', 'info', 'error', 'debug'].map(item => `console.${item}`)
traverse(ast, {
    CallExpression(path, state) {
        const calleeName = generate(path.node.callee).code
        if (targetCalleeName.includes(calleeName)) {
            const { line, column } = path.node.loc.start;
            path.node.arguments.unshift(types.stringLiteral(`filename:(${line}, ${column})`))
        }
    }
});

const { code, map } = generate(ast);
console.log(code);