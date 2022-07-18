window.onload = () => {
    Setup()
    let timer = setTimeout(function tick() {
        Draw()
        if (stack.length === 0) {
            clearTimeout(timer)
            for (let i = 0; i < cellRowAmount; ++i) {
                for (let j = 0; j < cellColAmount; ++j) {
                    cells[i][j].Show()
                }
            }
            return
        }
        timer = setTimeout(tick, 1000 / FPS)
    }, 1000 / FPS)
}

function Setup() {
    canvas.width = width
    canvas.height = height
    context = canvas.getContext('2d')
    
    context.fillStyle='#000'
    context.fillRect(0, 0, width, height)

    for (let i = 0; i < cellRowAmount; ++i) { // y
        cells[i] = []
        for (let j = 0; j < cellColAmount; ++j) { // x
            cells[i][j] = new Cell(j, i)
        }
    }
    current = cells[0][0]
}

function Draw() {
    
    for (let i = 0; i < cellRowAmount; ++i) {
        for (let j = 0; j < cellColAmount; ++j) {
            cells[i][j].Show()
        }
    }
    current.visited = true
    current.Highlight()
    let next = current.Choose()
    if (next) {
        next.visited = true
        stack.push(current)
        RemoveWalls(current, next)
        current = next
    } else if (stack.length > 0) {
        current = stack.pop()
    }
}
