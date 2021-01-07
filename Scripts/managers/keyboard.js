"use strict";
var managers;
(function (managers) {
    class Keyboard {
        // constructors
        constructor() {
            this.fireOnce = true;
            this.antiBoomOnce = true;
            this.enabled = true;
            document.addEventListener('keydown', this.onKeyDown.bind(this), false);
            document.addEventListener('keyup', this.onKeyUp.bind(this), false);
        }
        // private methods
        // public methods
        onKeyDown(event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveForward = true;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = true;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = true;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = true;
                    break;
                case config.Keys.ESCAPE:
                    this.escape = true;
                    break;
                case config.Keys.SPACE:
                    if (this.fireOnce) {
                        this.fire = true;
                        this.fireOnce = false;
                        console.debug("debug: fire once" + this.fireOnce);
                        break;
                    }
                    else {
                        this.fire = false;
                        break;
                    }
                case config.Keys.B:
                    if (this.antiBoomOnce) {
                        this.antiBoom = true;
                        this.antiBoomOnce = false;
                        console.debug("debug: anti boom once" + this.antiBoomOnce);
                        break;
                    }
                    else {
                        this.antiBoom = false;
                        break;
                    }
            }
        }
        onKeyUp(event) {
            switch (event.keyCode) {
                case config.Keys.W:
                case config.Keys.UP_ARROW:
                    this.moveForward = false;
                    break;
                case config.Keys.A:
                case config.Keys.LEFT_ARROW:
                    this.moveLeft = false;
                    break;
                case config.Keys.S:
                case config.Keys.DOWN_ARROW:
                    this.moveBackward = false;
                    break;
                case config.Keys.D:
                case config.Keys.RIGHT_ARROW:
                    this.moveRight = false;
                    break;
                case config.Keys.ESCAPE:
                    this.escape = false;
                    break;
                case config.Keys.SPACE:
                    this.fireOnce = true;
                    this.fire = false;
                    break;
                case config.Keys.B:
                    this.antiBoomOnce = true;
                    this.antiBoom = false;
                    break;
            }
        }
    }
    managers.Keyboard = Keyboard;
})(managers || (managers = {}));
//# sourceMappingURL=keyboard.js.map