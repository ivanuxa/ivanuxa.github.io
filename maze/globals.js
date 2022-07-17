const cells = []
const width  = 800
const height = 800

const cellWidth  = 25
const cellHeight = 25

const cellRowAmount = width / cellWidth
const cellColAmount = height / cellHeight

const canvas = document.getElementById("canvas")

const stack = []

const FPS = 30

var context
var current

async function Sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

function DrawLine(x1, y1, x2, y2) {
    context.beginPath();
    context.moveTo(x1, y1)
    context.lineTo(x2, y2)
    context.stroke()
    context.closePath();
}
