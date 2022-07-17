function Lerp(start, end, t) {
    if (typeof start !== typeof end) throw "Type Exception: start and end should be the same type"
    if (typeof t !== "number") throw "Type Exception: t is expected to be number"
    if (t < 0 || t > 1)        throw "Range Exception: t is expected to be in range from 0 to 1 inclusive"
    if (typeof start === "number") return start + (end - start) * t
    if (start instanceof Point) return Sum(start, Diff(end, start).Times(t))
    throw "Type Exception: start and end should be either Number or Point"
}