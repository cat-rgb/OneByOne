function MyNew(fn, ...args) {
    const obj = Object.assign(fn.prototype)
    const result = fn.call(obj, ...args)
    // 判断返回值是否是对象
    if(result && typeof result === 'object' || typeof result === 'function') {
        return result
    }
    return obj
}

function Fn(name) {
    this.name = name
}

const obj = MyNew(Fn, 'name')
console.log(obj)

/**
 * 创建空对象，绑定原型
 * 调用函数，更改this指向到常见的空对象
 * 判断返回值是否是对象或者函数
 */
