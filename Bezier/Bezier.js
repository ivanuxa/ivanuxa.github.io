class Bezier {
    #n
    points_ = []
    constructor(points) {
        if (!Array.isArray(points)) throw "Type Exception: points is expected to be Array"
        if (points.length < 2) throw "Range Exception: points is expected to be greater or equal to 2"
        if (!points.every(x => x instanceof Point)) throw "Type Exception: points contains not Point element"
        if (!points.every(CheckForTheSameInstance)) throw "Type Exception: points contains different Point elements"
        this.points_ = CopyArrayOfPoints(points)
        this.#n = points.length - 1
    }

    Point(t) {
        let points = CopyArrayOfPoints(this.points_)
        let updatedPoints = []
        for (let i = 0; i < this.#n; ++i) {
            for (let j = 0; j < points.length - 1; ++j) {
                updatedPoints.push(Lerp(points[j], points[j + 1], t))
            }
            points = [...updatedPoints]
            updatedPoints = []
        }
        return points[0]
    }
}

function CopyArrayOfPoints(points) {
    let copy = []
    for (const point of points) {
        const clone = point.Clone()
        copy.push(clone)
    }
    return copy
}