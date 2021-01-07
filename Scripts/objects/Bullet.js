"use strict";
var objects;
(function (objects) {
    class Bullet extends objects.GameObject {
        // constructor
        constructor(imagePath = config.Game.ASSETS.getResult("beam2"), x = 0, y = 0, isCentered = true) {
            super(imagePath, x, y, isCentered);
            // private _fireRate:number=0;
            // private _fireTimer:number=0;
            this._player = objects.Player;
            this._enemy = objects.Enemy;
            this.Start();
        }
        _checkBounds() {
        }
        Start() {
            //this._verticalSpeed = -5;
            //this.velocity = new Vector2(0, this._verticalSpeed);
            //this.Direction();
        }
        _move() {
            //this.position = Vector2.add(this.position, this.velocity);
        }
        Update() {
            //this._move();
        }
        Reset() {
        }
        Direction() {
            // if(this._enemy)
            // {
            //     console.log("is enemy");
            //     this.position = Vector2.add(this.position, this.velocity);
            // }
            // if(this._player)
            // {
            //     this.position = Vector2.add(this.position, this.velocity);
            //     console.log("is not enemy");
            // }
        }
    }
    objects.Bullet = Bullet;
})(objects || (objects = {}));
//# sourceMappingURL=Bullet.js.map