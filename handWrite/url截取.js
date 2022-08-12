// 将 'sapms.com/?a=1&b=2&c=…'
// 输出为 { a: '1', b: '2', c: '3', d: 'xx', arr: [ '1', '2' ] }
const str = 'https://sapms.com/?a=1&b=2&c=3&d=xx&arr[]=1&arr[]=2#hash'
function parse(str) {
    const wenhao = str.indexOf('?')
    const jinghao = str.lastIndexOf('#')
    const params= str.slice(wenhao+1, jinghao).split('&')
    console.log(params)

    const result = {}
    for(let item of params) {
        const [key, value] = item.split('=')
        
        if(key.indexOf('[]') >= 0) {
            const  newkey = key.slice(0, key.length - 2)
            result[newkey] = (result[newkey] || []).concat([value])
        } else {
            result[key] = value
         }
    }
    return result
}

console.log(parse(str))

