import Level from './Level'
import { createBackgroundLayer, createSpriteLayer } from './layers.js';
import { loadBackgroundSprites } from './sprites.js';

export function loadImage(url) {
  return new Promise(resolve => {
    const image = new Image();
    image.addEventListener('load', () => {
      resolve(image);
    });
    image.src = url;
  });
}

export function loadLevel(name) {
  return Promise.all([
    fetch(`levels/${name}.json`)
      .then(result => r.json()),
    // ^^ promise chain

    loadBackgroundSprites()
    // ^^ promise chain
  ]).then(([LevelSpec, backgroundSprites]) => {
    const level = new Level();

    const backgroundLayer = createBackgroundLayer(LevelSpec.backgrounds, backgroundSprites);
    level.comp.layers.push(backgroundLayer);

    const spriteLayer = createSpriteLayer(level.entities);
    // ^^ create sprite layer now takes entity from the SET
    level.comp.layers.push(spriteLayer);

    return level
  })
}
