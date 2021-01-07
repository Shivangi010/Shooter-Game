"use strict";
var objects;
(function (objects) {
    class Event extends objects.GameObject {
        constructor() {
            super(config.Game.ASSETS.getResult("life"), 0, 0, true);
            this.Start();
        }
        _checkBounds() {
            if (this.position.y > config.Game.SCREEN_HEIGHT + this.height) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        Start() {
            this._verticalSpeed = 10; // 5 px per frame
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            let randomx = this.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new objects.Vector2(randomx, -this.height);
        }
        RandomRange(min, max) {
            return Math.random() * (max - min + 1) + min;
        }
    }
    objects.Event = Event;
})(objects || (objects = {}));
//# sourceMappingURL=Event.js.map