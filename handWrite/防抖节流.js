
function throttle(fn , delay) {
    let timer, time1 = new Date().getTime()
    return (...args) => {
        let time2 = new Date().getTime()
        if(time2 - time1 > delay) {
            timer = setTimeout(() => {
                fn.call(this, ...args)
                time1 = time2
            })
        }
    }
 }


function debounce(fn ,delay){
    let timer = null
    return (...args) => {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() =>{
            fn.call(this, ...args)
            timer = null
        }, delay)
    }
}

function test() {
    console.log(1)
}

setInterval(throttle(test, 2000))
// setInterval(debounce(test, 1000))