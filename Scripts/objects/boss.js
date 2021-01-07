"use strict";
var objects;
(function (objects) {
    class Boss extends objects.GameObject {
        // CONSTRUCTOR
        constructor(imagePath = config.Game.ASSETS.getResult("placeholder")) {
            //super((config.Game.ASSETS.getResult("enemy")));
            super(imagePath);
            this._died = false;
            this._dy = 0; //speed
            this._dx = 0;
            this.canFire = true;
            this.maxTime = 0;
            this._live = 10;
            this._enemybullets = new Array();
            this._enemies = new Array();
            this.Start();
        }
        // PRIVATE INSTANCE MEMBERS
        set Live(live) {
            this._live = live;
        }
        get Live() {
            return this._live;
        }
        // PUBLIC PROPERTIES
        set died(status) {
            this._died = status;
        }
        canShoot() {
            if (!this.isColliding) {
                if (this.canFire) {
                    this.canFire = false;
                    return true;
                }
            }
            return false;
        }
        //         // To start the loop
        // var mainLoopId = setInterval(function(){
        //     // Do your update stuff...
        //     move();
        // }, 40);
        // // To stop the loop
        // clearInterval(mainLoopId);`
        // PRIVATE METHODS
        _checkBounds() {
            if (this.x >= 640 - this.width) {
                this.x = 640 - this.width;
            }
            if (this.x <= 0) {
                this.x = 0;
            }
            // if(this.y >=800 + this.height)
            // {
            //     this.Reset();
            // }
        }
        // PUBLIC METHODS
        Start() {
            // this._dy = 3; //speed
            this.Reset();
            this.Main();
        }
        Main() {
        }
        Update() {
            if (this.Live > 0) {
                this.Move();
                this._checkBounds();
            }
        }
        Reset() {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = 50;
            // this._dy = Math.floor((Math.random() * 5) +5);
            this.canFire = true;
        }
        Move() {
            let tick = createjs.Ticker.getTicks();
            if ((tick % 90) == 0)
                this._dx = Math.random() * (20) - 10;
            this.x += this._dx;
            // this.y += this._dy;
            this.position = new objects.Vector2(this.x, 50);
        }
    }
    objects.Boss = Boss;
})(objects || (objects = {}));
//# sourceMappingURL=boss.js.map