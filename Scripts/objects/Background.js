"use strict";
var objects;
(function (objects) {
    class Background extends objects.GameObject {
        //public properities
        //constructor
        constructor(imagePath = config.Game.ASSETS.getResult("placeholder")) {
            super(imagePath);
            //super(config.Game.ASSETS.getResult("background"));
            this.Start();
        }
        //provate method
        _checkBounds() {
            if (this.position.y >= 0) {
                this.Reset();
            }
        }
        _move() {
            this.position = objects.Vector2.add(this.position, this.velocity);
        }
        //public method
        Start() {
            this._verticalSpeed = 10;
            this.velocity = new objects.Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Reset() {
            this.position.y = -2400;
        }
    }
    objects.Background = Background;
})(objects || (objects = {}));
//# sourceMappingURL=Background.js.map