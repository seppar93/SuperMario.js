import Compositor from './Compositor.js'
import { createBackgroundLayer } from './Layers.js'
import { loadLevel } from './loaders.js';
import { loadMarioSprite, loadBackgroundSprites } from './Sprites.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


function createSpriteLayer(entity) {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; ++i) {
      entity.draw(context)

    }
  }
}

class Vec2 {
  constructor(x, y) {
    this.set(x, y)
  }
  set(x, y) {
    this.x = x
    this.y = y

  }
}

class Entity {
  constructor() {
    this.pos = new Vec2(0, 0)
    this.vel = new Vec2(0, 0)
  }
}




Promise.all([
  loadMarioSprite(),
  loadBackgroundSprites(),
  loadLevel('1-1')
]).then(([MarioSprite, backgroundSprites, level]) => {
  const comp = new Compositor
  const backgroundLayer = createBackgroundLayer(level.backgrounds, backgroundSprites)
  comp.layers.push(backgroundLayer)


  const gravity = 0.5

  const mario = new Entity()
  mario.pos.set(64, 180)
  mario.vel.set(2, -10)

  mario.draw = function drawMario(context) {
    MarioSprite.draw('idle', context, this.pos.x, this.pos.y)

  }

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



