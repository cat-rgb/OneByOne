function deepClone(target) {
  if (target && typeof target === "object") {
    let newTarget = Array.isArray(target) ? [] : {};
    for (let key in target) {
        if(target.hasOwnProperty(key)) {
            newTarget[key] =
            typeof target === "object" ? deepClone(target[key]) : target[key];
        }
    }
    return newTarget;
  } else {
    return target;
  }
}

const d1 = deepClone({
  a: 1,
  b: 2,
  c: {
    a: 3,
    b: 4,
    c: {
      d: 5,
    },
  },
  arr: [1, 2, 3, { a: 5, b: { c: 7 } }],
});

console.log(JSON.stringify(d1));
