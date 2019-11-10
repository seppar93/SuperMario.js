// const matrix = new Matrix()

// matrix.set(5, 4, { name: 'ground ' })
// const tile =  matrix.get(mario.pos.x, * TILE_SIZE mario.pos.y * TILE_SIZE)
// // ^^ API of the matrix  

export class Matrix {
  // Instantiate on the level
  constructor() {
    this.grid = []
  }

  forEach(callback) {
    this.grid.forEach((column, x) => {
      column.forEach((value, y) => {
        callback(value, x ,y)

      })
    })
  }




  get(x, y) {
    const col = this.grid[x]
    if (col) {
      return col[y]
    }
    return undefined
  }

  set(x, y, value) {
    if (!this.grid[x]) {
      this.grid[x] = []
    }
    this.grid[x][y] = value
  }

}
window.Matrix = Matrix
// ^^ be able use Matrix in the console


export class Vec2 {
  constructor(x, y) {
    this.set(x, y);
  }

  set(x, y) {
    this.x = x;
    this.y = y;
  }
}
