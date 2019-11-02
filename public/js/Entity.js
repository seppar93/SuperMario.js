import { Vec2 } from './math.js';

export class Trait {
  constructor(name) {
    this.NAME = name;
  }

  update() {
    console.warn('Unhandled update call in Trait');
  }
}

export default class Entity {
  constructor() {
    this.pos = new Vec2(0, 0);
    this.vel = new Vec2(0, 0);

    this.traits = [];
  }

  addTrait(trait) {
    // ^^ compose objects in smaller fragments
    // ^^ composition 
    this.traits.push(trait);
    this[trait.NAME] = trait;
    // ^^ this is needed to write mario.jump()

  }

  update(deltaTime) {
    this.traits.forEach(trait => {
      trait.update(this, deltaTime);
    });
  }
}
