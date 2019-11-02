export default class Timer {
  constructor(deltaTime = 1 / 60) {
    let accumulatedTime = 0;
    let lastTime = 0;

    this.updateProxy = (time) => {
      // arrow functions are not private
      accumulatedTime += (time - lastTime) / 1000;

      while (accumulatedTime > deltaTime) {
        this.update(deltaTime);
        accumulatedTime -= deltaTime;
      }

      lastTime = time;

      this.enqueue();
    }
  }

  enqueue() {
    requestAnimationFrame(this.updateProxy); // built in function that takes a function
  }

  start() {
    this.enqueue();
  }
}
