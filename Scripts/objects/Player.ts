module objects
{
    export class Player extends GameObject
    {
        // PRIVATE INSTANCE MEMBERS
        private _died:boolean = false;
        private _verticalPosition?:number;
        
        //private _keyPosition:Vector2 = new Vector2(346, 0);
        
        // PUBLIC PROPERTIES
        set died(status:boolean) {
            this._died = status;
        }

        // CONSTRUCTOR
        constructor()
        {
            super(config.Game.ASSETS.getResult("player"),320,0,true);
            this.Start();
        }

        // PRIVATE METHODS
        protected _checkBounds(): void {
           
            // left boundary
            if(this.position.x <= this.halfWidth)
            {
                this.position = new Vector2(this.halfWidth, this.position.y);
            }

            // right boundary

            if(this.position.x >= config.Game.SCREEN_WIDTH - this.halfWidth)
            {
                this.position = new Vector2(config.Game.SCREEN_WIDTH - this.halfWidth, this.position.y);
            }

            // bottom boundary 

            if(this.position.y >= config.Game.SCREEN_HEIGHT - this.halfHeight)
            {
                this.position = new Vector2(this.x, config.Game.SCREEN_HEIGHT - this.halfHeight);
            }
        } 



        private _move(): void
        {
            //this.position = new Vector2(this._keyPosition.x, this._verticalPosition);
            if(config.Game.keyboardManager.moveLeft){
                this.x -=5;
            }
            if(config.Game.keyboardManager.moveRight){
                this.x +=5;
            }
            if(config.Game.keyboardManager.moveForward){
                this.y -= 5;
            }
            if(config.Game.keyboardManager.moveBackward){
                this.y += 5;
            }
            this.position = new Vector2(this.x, this.y);
        }
        // private _keyboardInput(event: KeyboardEvent) {
        //     // PRESS LEFT ARROW OR 'A' KEY
        //     if (event.keyCode == 37 || eve nt.keyCode == 65) {
        //        this._keyPosition.x -= 5;
        //     }
            
        //     // PRESS RIGHT ARROW OR 'D' KEY
        //     else if (event.keyCode == 39 || event.keyCode == 68 ) {
        //         this._keyPosition.x += 5;
        //     }
           
        //  } 
        // PUBLIC METHODS
        public Start(): void {
            this.x = 320;
            this.y = 750;
            // this._verticalPosition = 760; 
        }

        public Update(): void {
            this._move();
            this._checkBounds();
            this.Options();
        }

        public Options():void{
            if(config.Game.keyboardManager.escape){
                config.Game.SCENE_STATE = scenes.State.END;
                config.Game.STATUS = true;
            }
            else{
                config.Game.STATUS = false;
            }
        }

        public Reset(): void {
            
        }
    }
}