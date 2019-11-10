// const matrix = new Matrix()

// matrix.set(5, 4, { name: 'ground ' })
// const tile =  matrix.get(mario.pos.x, * TILE_SIZE mario.pos.y * TILE_SIZE)
// // ^^ API of the matrix  

export class Matrix {
  // Instantiate on the level
  constructor() {
    this.gird = []
  }
  get(x, y) {
    const col = this.gird[x]
    if (col) {
      return col[y]
    }
    return undefined
  }

  set(x, y, value) {
    if (!this.gird[x]) {
      this.gird[x] = []
    }
    this.gird[x][y] = value
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
