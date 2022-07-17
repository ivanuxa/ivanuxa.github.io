window.onload = () => {
    Setup()
    let timer = setTimeout(function tick() {
        if (Check()) clearTimeout(timer)
        Draw()
        timer = setTimeout(tick, 1000 / FPS)
    }, 1000 / FPS)
}

function Setup() {
    canvas.width = width
    canvas.height = height
    context = canvas.getContext('2d')
    
    context.fillStyle='#000'
    context.fillRect(0, 0, width, height)

    context.strokeWidth = 4

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

function Check() {
    return current === cells[0][0] && cells[0][1].visited && cells[1][0].visited
}