

import Entity from './Entity.js';
import Velocity from './traits/Velocity.js'
import { loadMarioSprite } from './sprites.js';


export function createMario() {
  return loadMarioSprite()
    .then(sprite => {
      const mario = new Entity();

      mario.addTrait(new Velocity())

      mario.draw = function drawMario(context) {
        sprite.draw('idle', context, this.pos.x, this.pos.y);
        //^^ the more time passes the more velocity increases
      }

      // mario.update = function updateMario(deltaTime) {
      //   // ^^ attaching a function to class give you ac cess to this
      //   this.pos.x += this.vel.x * deltaTime;
      //   this.pos.y += this.vel.y * deltaTime;
      // }

      return mario;
    });
}