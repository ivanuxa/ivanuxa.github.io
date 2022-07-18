const cells = []
const width  = 800
const height = 800

const cellWidth  = 40
const cellHeight = 40

const cellRowAmount = width / cellWidth
const cellColAmount = height / cellHeight

const canvas = document.getElementById("canvas")

const stack = []
const FPS = 60

var context
var current

async function Sleep(msec) {
    return new Promise(resolve => setTimeout(resolve, msec));
}

function DrawLine(x1, y1, x2, y2) {
    context.fillStyle="#fff"
    
    context.fillRect(x1, y1, x2 - x1 + 1, y2 - y1 + 1)
}
