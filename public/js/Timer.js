export default class Timer {
  constructor(deltaTime = 1 / 60) {
    let accumulatedTime = 0;
    let lastTime = 0;

    this.updateProxy = (time) => {
      // arrow function are not private 
      // deltaTime = (time - lastTime) / 1000
      accumulatedTime += (time - lastTime) / 1000;

      while (accumulatedTime > deltaTime) {
        // ^^decoupled internal frame rate from rendering frame rate 

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
