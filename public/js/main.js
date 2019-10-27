// import SpriteSheet from './SpriteSheet.js';
import { loadLevel } from './loaders.js';
import { loadMarioSprite, loadBackgroundSprites } from './Sprites.js'

const canvas = document.getElementById('screen');
const context = canvas.getContext('2d');

function drawBackground(background, context, sprites) {
  background.ranges.forEach(([x1, x2, y1, y2]) => {
    for (let x = x1; x < x2; ++x) {
      for (let y = y1; y < y2; ++y) {
        sprites.drawTile(background.tile, context, x, y);
      }
    }
  });
}


Promise.all([
  loadMarioSprite(),
  loadBackgroundSprites(),
  loadLevel('1-1')
]).then(([MarioSprite, sprites, level]) => {
  const backgroundBuffer = document.createElement('canvas')
  backgroundBuffer.width = 256;
  backgroundBuffer.height = 240;


  level.backgrounds.forEach(background => {
    drawBackground(background, backgroundBuffer.getContext('2d'), sprites);
  })
  const pos = {
    x: 64,
    y: 64
  }
  function update() {
    context.drawImage(backgroundBuffer, 0, 0)
    MarioSprite.draw('idle', context, pos.x, pos.y)
    pos.x += 2;
    pos.y += 2;
    requestAnimationFrame(update)// built in function that takes a function
  }
  update()
})



