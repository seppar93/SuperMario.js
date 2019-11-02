import { Trait } from '../Entity.js';

export default class Jump extends Trait {
  constructor() {
    super('jump');

    this.duration = 0.5;
    this.engageTime = 0;

    this.velocity = 200;
  }

  start() {
    this.engageTime = this.duration;
    // ^ first the duration is set to 0.5
  }
  cancel() {
    this.engageTime = 0;
  }

  update(entity, deltaTime) {
    if (this.engageTime > 0) {
      // the if statement starts to run 

      entity.vel.y = -this.velocity;
      // velocity increases 

      this.engageTime -= deltaTime;
      // decrement engage time 
    }
  }
}