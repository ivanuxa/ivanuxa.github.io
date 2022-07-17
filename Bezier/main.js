const canvas = document.getElementById("canvas")
const context = canvas.getContext("2d")
var canvasData
var width, height

window.onload = window.onresize = Setup

function Setup() {
    Resize()
    Clear()
    Draw()
}

function Resize() {
    canvas.width = width = window.innerWidth
    canvas.height = height = window.innerHeight
    canvasData = context.getImageData(0, 0, width, height)
}

function Clear() {
    context.fillStyle = "#000"
    context.fillRect(0, 0, width, height)
}

function Draw() {
    const left = [
        new Point(200, 200),
        new Point(120, 500),
        new Point(200, 600),
    ]
    const bottomLeftEar = [
        new Point(200, 200),
        new Point(170, 125),
    ]
    const topLeftEar = [
        new Point(170, 125),
        new Point(245, 155),
    ]
    const top = [
        new Point(245, 155),
        new Point(545, 135),
        new Point(545, 155),
    ]
    const topRightEar = [
        new Point(545, 155),
        new Point(620, 125),
    ]
    const bottomRightEar = [
        new Point(620, 125),
        new Point(590, 200),
    ]
    const right = [
        new Point(590, 200),
        new Point(670, 500),
        new Point(590, 600),
    ]
    const AMOUNT = 100
    const bezier = []
    bezier.push(new Bezier(left))
    bezier.push(new Bezier(bottomLeftEar))
    bezier.push(new Bezier(topLeftEar))
    bezier.push(new Bezier(top))
    bezier.push(new Bezier(topRightEar))
    bezier.push(new Bezier(bottomRightEar))
    bezier.push(new Bezier(right))
    context.fillStyle = "#fff"
    for (let t = 0; t <= AMOUNT; ++t) {
        for (const b of bezier) {
            const point = b.Point(t / AMOUNT)
            context.fillRect(point.X, point.Y, 1, 1)
        }
    }
}
