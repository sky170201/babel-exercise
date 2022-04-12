// #### 函数名
// 参数一，参数二，参数三
// url: '',
// method: '',
// ...
/**
  ### functionName: 'downLoadAPISecretKey',
  > downLoadAPISecretKey(name, id)
  - functionParams: [ { name: 'name' }, { name: 'id' } ],
  - url: '/secret-key/{name}/download/{id}',
  - method: 'get',
  - responseType: 'blob'
  ...
 */
module.exports = (docs) => {
    let str = ''

    docs.forEach(doc => {
        str += '### ' + doc.functionName + '\n'
        str += `> ${doc.functionName}(${doc.functionParams.map((p) => p.name).join(',')})\n`
        delete doc.functionName
        str += '- 参数：' + doc.functionParams.map((p) => p.name).join(', ') + '\n'
        delete doc.functionParams
        for (let key in doc) {
            str += `- ${key}: ${doc[key]}\n`
        }
        str += '\n'
    })

    return str
}
