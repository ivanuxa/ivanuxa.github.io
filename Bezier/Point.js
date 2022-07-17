class Point {
    #n = 0
    #x = undefined
    #y = undefined
    #z = undefined
    constructor(x = undefined, y = undefined, z = undefined) {
        if (typeof x === "undefined") throw "Property Exception: expected to have at least x"
        if (typeof y === "undefined" && typeof z !== "undefined") throw "Property Exception: coords is expected to have y while have z"
        if (!UndefinedOrNumber(x)) throw "Property Exception: x is expected to be number"
        if (!UndefinedOrNumber(y)) throw "Property Exception: y is expected to be number or undefined"
        if (!UndefinedOrNumber(z)) throw "Property Exception: z is expected to be number or undefined"
        this.#x = x
        this.#y = y
        this.#z = z
        this.#n += !isNaN(this.#x) + !isNaN(this.#y) + !isNaN(this.#z)
    }

    get X() {
        return this.#x
    }

    get Y() {
        return this.#y
    }

    get Z() {
        return this.#z
    }

    Add(other) {
        if (this.#n != other.#n) throw "Property Exception: other is expected to have the same amount of defined properties"
        if (!isNaN(this.#x)) this.#x += other.#x
        if (!isNaN(this.#y)) this.#y += other.#y
        if (!isNaN(this.#z)) this.#z += other.#z
        return this
    }

    Sub(other) {
        if (this.#n != other.#n) throw "Property Exception: other is expected to have the same amount of defined properties"
        if (!isNaN(this.#x)) this.#x -= other.#x
        if (!isNaN(this.#y)) this.#y -= other.#y
        if (!isNaN(this.#z)) this.#z -= other.#z
        return this
    }

    Times(n) {
        if (!isNaN(this.#x)) this.#x *= n
        if (!isNaN(this.#y)) this.#y *= n
        if (!isNaN(this.#z)) this.#z *= n
        return this
    }

    Clone() {
        return new Point(this.#x, this.#y, this.#z)
    }
}

function Sum(lhs, rhs) {
    let temp = lhs.Clone()
    return temp.Add(rhs)
}

function Diff(lhs, rhs) {
    let temp = lhs.Clone()
    return temp.Sub(rhs)
}

function Times(point, n) {
    let temp = point.Clone()
    return temp.Times(n)
}
