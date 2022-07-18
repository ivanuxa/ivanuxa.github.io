class Cell {
    x
    y
    walls
    visited
    
    constructor(x, y) {
        this.x = x
        this.y = y
        this.walls = {
            top: true,
            right: true,
            bottom: true,
            left: true
        }
        this.visited = false
    }

    Show() {
        let x = this.x * cellWidth
        let y = this.y * cellHeight
        if (this.visited) {
            context.fillStyle = "#e0e"
            context.fillRect(x, y, cellWidth, cellHeight)
        }
        if (this.walls.top) DrawLine(x, y, x + cellWidth, y)
        if (this.walls.right) DrawLine(x + cellWidth, y, x + cellWidth, y + cellHeight)
        if (this.walls.bottom) DrawLine(x, y + cellHeight, x + cellWidth, y + cellHeight)
        if (this.walls.left) DrawLine(x, y, x, y + cellHeight)
        
    }
    
    Highlight() {
        let x = this.x * cellWidth
        let y = this.y * cellHeight
        context.fillStyle = "#0e0"
        context.fillRect(x, y, cellWidth, cellHeight)
    }

    Choose() {
        const neighbours = []
        let top, right, bottom, left
        if (this.x > 0) left = cells[this.y][this.x - 1]
        if (this.y > 0) top = cells[this.y - 1][this.x]
        if (this.x < cellColAmount - 1) right = cells[this.y][this.x + 1]
        if (this.y < cellRowAmount - 1) bottom = cells[this.y + 1][this.x]
        const push = x => {
            if (x && !x.visited) neighbours.push(x)
        }
        push(top)
        push(right)
        push(bottom)
        push(left)
        if (neighbours.length === 0) return null
        return neighbours[Math.floor(Math.random() * neighbours.length)]
    }

    toString() {
        return `${this.x + cells.length * this.y}`
    }
}

function RemoveWalls(a, b) {
    if (a.x - b.x === 1 && a.y - b.y === 0) {
        a.walls.left = false
        b.walls.right = false
    }
    if (a.x - b.x === -1 && a.y - b.y === 0) {
        a.walls.right = false
        b.walls.left = false
    }
    if (a.x - b.x === 0 && a.y - b.y === 1) {
        a.walls.top = false
        b.walls.bottom = false
    }
    if (a.x - b.x === 0 && a.y - b.y === -1) {
        a.walls.bottom = false
        b.walls.top = false
    }
}