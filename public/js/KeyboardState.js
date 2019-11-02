const PRESSED = 1
const RELEASED = 0

export default class KeyboardState {
  constructor() {
    this.keyState = new Map()
    // ^hold the given state of a given key

    this.keyMap = new Map()
    // ^^ holds the call back function for a given key code
  }
  addMapping(keyCode, callback) {
    this.keyMap.set(keyCode, callback)
  }
  handleEvent(event) {
    const { keyCode } = event

    if (!this.keyMap.has(keyCode)) {
      return
      // ^^ keeps track of what we have mapped and if not prevents it 
    }

    event.preventDefault()
    const keyState = event.type === "keydown" ? PRESSED : RELEASED

    if (this.keyStates.get(keyCode) === keyState) {
      return
    }

    this.keyState.set(keyCode, keyState)
    this.keyMap.get(keyCode)(keyState)
  }
  listenTo(window) {
    ['keydown', 'keyup'].forEach(eventName => {
      window.addEventListener(event => {
        this.handleEvent(event)

      })
    })

  }

}