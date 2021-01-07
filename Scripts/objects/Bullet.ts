module objects 
{
    export class Bullet extends GameObject
    {

        // private _fireRate:number=0;
        // private _fireTimer:number=0;
        private _player = objects.Player;
        private _enemy = objects.Enemy;
        private _verticalSpeed?: number; // 5 px per frame

         // constructor
         constructor(
            imagePath:Object = config.Game.ASSETS.getResult("beam2"), 
            x:number = 0, y:number = 0, isCentered:boolean = true)
        {
            super(imagePath, x, y, isCentered);
            this.Start();
        }


        protected _checkBounds(): void 
        {

        }        
        public Start(): void {
            //this._verticalSpeed = -5;
            //this.velocity = new Vector2(0, this._verticalSpeed);
            //this.Direction();
        }
        private _move():void
        {
            //this.position = Vector2.add(this.position, this.velocity);
        }
        public Update(): void {
            //this._move();
        }
        public Reset(): void {
            
        }

        public Direction():void
        {
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

        // public OneShot():void{
        //     //shot
        // }
        
    }
}