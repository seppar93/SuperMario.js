import Compositor from './Compositor.js';

export default class Level {
  constructor() {
    this.comp = new Compositor()
    this.entities = new Set()
    // set only stores unique objects
  }
}