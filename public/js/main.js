import Compositor from './Compositor.js'
import Entity from './Entity.js'
import { createBackgroundLayer } from './Layers.js'
import { createMario } from './entities.js'

import { loadLevel } from './loaders.js';
import { loadBackgroundSprites } from './Sprites.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


function createSpriteLayer(entity) {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; ++i) {
      entity.draw(context)

    }
  }
}



Promise.all([
  createMario(),
  loadBackgroundSprites(),
  loadLevel('1-1')
]).then(([mario, backgroundSprites, level]) => {
  const comp = new Compositor
  const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites)
  comp.layers.push(backgroundLayer)


  const gravity = 0.5



  mario.update = function updateMario() {
    // ^^ attaching a function to class give you ac cess to this
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

  }





  const spriteLayer = createSpriteLayer(mario)
  comp.layers.push(spriteLayer)


  function update() {
    comp.draw(context)
    mario.update()
    mario.vel.y += gravity
    requestAnimationFrame(update)// built in function that takes a function
  }
  update()
})



