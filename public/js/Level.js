import Compositor from './Compositor.js';
import { Matrix } from './math.js';
export default class Level {
  constructor() {
    this.comp = new Compositor()
    this.entities = new Set()
    // set only stores unique objects
    this.tiles = new Matrix()
  }

  update(deltaTime) {
    this.entities.forEach(entity => {
      entity.update(deltaTime)
    });
  }
}