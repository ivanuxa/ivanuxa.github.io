function UndefinedOrNumber(x) {
    return typeof x === "number" || typeof x === "undefined"
}

function CheckForTheSameInstance(x, i, arr) {
    if (i === 0) return true
    return Object.getPrototypeOf(x) === Object.getPrototypeOf(arr[0])
}
