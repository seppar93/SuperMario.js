import Compositor from './Compositor.js'
import { createBackgroundLayer } from './Layers.js'
import { loadLevel } from './loaders.js';
import { loadMarioSprite, loadBackgroundSprites } from './Sprites.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');


function createSpriteLayer(sprite, pos) {
  return function drawSpriteLayer(context) {
    for (let i = 0; i < 20; ++i) {
      sprite.draw('idle', context, pos.x + i * 16, pos.y)

    }
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
  const pos = {
    x: 64,
    y: 180
  }

  const vel = {
    x: 2,
    y: -10
  }

  const spriteLayer = createSpriteLayer(MarioSprite, pos)
  comp.layers.push(spriteLayer)


  function update() {
    comp.draw(context)
    pos.x += vel.x;
    pos.y += vel.y;
    vel.y += gravity
    requestAnimationFrame(update)// built in function that takes a function
  }
  update()
})



