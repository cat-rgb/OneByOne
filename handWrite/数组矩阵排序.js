const m = 5, n = 7

const arr = new Array(m).fill('')
for (let i = 0; i < m; i++) {
    arr[i] = new Array(7).fill('')
}
let flag = false
let num = 0
let cur = m
console.log(arr)
for (let i = 0; i < n; i++) {
    for (let k = 0; k < m; k++) {
        if (!flag) {
            arr[k][i] = ++num
        } else {
            cur--
            console.log(cur, i)
            arr[cur][i] = ++num
        }
    }
    flag = !flag
    cur = m
}
console.log(arr)

var exmalples = [
    [
        1, 10, 11, 20,
        21, 30, 31
    ],
    [
        2, 9, 12, 19,
        22, 29, 32
    ],
    [
        3, 8, 13, 18,
        23, 28, 33
    ],
    [
        4, 7, 14, 17,
        24, 27, 34
    ],
    [
        5, 6, 15, 16,
        25, 26, 35
    ]
]
