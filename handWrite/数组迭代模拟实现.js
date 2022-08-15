Array.prototype._filter = function (fn) {
    const _this = this // arr
    const result = []
    for(let i =0;i<_this.length;i++) {
       const res = fn.call(_this, _this[i], i, _this)
        if(res) {
            result.push(_this[i])
        }
    }
    console.log(result)
    return result
}

const arr = [1,2,3,4,5]
arr.filter(i => i> 1)
