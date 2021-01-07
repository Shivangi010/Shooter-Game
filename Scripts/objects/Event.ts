module objects
{
    export class Event extends GameObject
    {
        private _verticalSpeed?:number;

        constructor()
        {
            super(config.Game.ASSETS.getResult("life"),0,0, true);
            this.Start();
        }

        protected _checkBounds(): void 
        {
            if(this.position.y > config.Game.SCREEN_HEIGHT + this.height)
            {
                this.Reset();
            }
        }

        private _move():void
        {
            this.position = Vector2.add(this.position, this.velocity);
        }

        public Start(): void 
        {
            this._verticalSpeed = 10; // 5 px per frame
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();
        }
        public Update(): void 
        {
            this._move();
            this._checkBounds();
            
        }
        public Reset(): void 
        {
            let randomx = this.RandomRange(this.halfWidth, config.Game.SCREEN_WIDTH - this.halfWidth);
            this.position = new Vector2(randomx, -this.height);
        }

        public RandomRange(min:number, max:number):number
        {
            return Math.random() * (max  - min + 1) + min;
        }
    }
}