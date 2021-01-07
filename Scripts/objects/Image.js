"use strict";
var objects;
(function (objects) {
    class Image extends objects.GameObject {
        constructor(imagePath = config.Game.ASSETS.getResult("placeholder"), x = 0, y = 0, isCentered = true) {
            super(imagePath, x, y, isCentered);
            this._status = false;
            this.Start();
        }
        _checkBounds() {
            if (this.y >= 800 + this.height) {
                this.Resets();
            }
        }
        _move() {
            this.y += 5;
            this.position = new objects.Vector2(this.x, this.y);
        }
        getStatus() {
            return this._status;
        }
        setStatus(stat) {
            this._status = stat;
        }
        Start() {
            this.RandomPoint(false);
        }
        Update() {
            this._move();
            this._checkBounds();
        }
        Resets() {
            this.x = -999;
            this.y = -99999;
        }
        Reset() {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -this.height;
        }
        RandomPoint(w) {
            if (w == true) {
                this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
                this.y = -this.height;
            }
            return new objects.Vector2(this.x, this.y);
        }
    }
    objects.Image = Image;
})(objects || (objects = {}));
//# sourceMappingURL=Image.js.map