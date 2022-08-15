function toUppercase(str){
    const arr = str.replaceAll(' ', '').split('-')
    const res = []
    let flag = 0

    for(let i = 0;i< arr.length;i++) {
        if(flag < 2 && arr[i]) flag++
        if(arr[i] && flag ==2) {
            arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1)
        }
    }

    return arr.join('')

}

toUppercase('- -  font-  ----  size')

function tf(str) {
    str = str.replaceAll(' ', '')
    let reg = /-(\w)/g
    const res = str.replace(reg, ($0, $1) => {
        return $1.toUpperCase()
    })
    return res.replaceAll('-', '')
}

tf('font----size')

