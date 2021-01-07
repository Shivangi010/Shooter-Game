module objects
{
    export class Enemy extends GameObject
    {
        private _died:boolean = false;
        private _dy: number =0; //speed
        private _dx:number =0;
        private canFire: boolean = true;
        private maxTime: number = 0;
        private _enemybullets: Array<objects.Bullet>;
        private _enemies: Array<objects.Enemy>;
        private _live: number = 2;

        
        // PRIVATE INSTANCE MEMBERS
        set Live(live:number)
        {
            this._live = live;
        }

        get Live():number
        {
            return this._live;
        }

        
        //PUBLIC PROPERTIES
        set died(status:boolean) {
            this._died = status;
        }

        // CONSTRUCTOR
        constructor(imagePath:Object = config.Game.ASSETS.getResult("placeholder"))
        {
            //super((config.Game.ASSETS.getResult("enemy")));
            super(imagePath);
            this._enemybullets = new Array<objects.Bullet>();
            this._enemies = new Array<objects.Enemy>();

            this.Start();
        }

        public canShoot(): boolean
        {
            if(!this.isColliding)
            {
                if(this.canFire){
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
        protected _checkBounds(): void {
            if(this.x >= 640 - this.halfWidth)
            {
                this.x = 640 - this.halfWidth;
            }
            if(this.y >=800 + this.height)
            {
                this.Reset();
            }
        }      

        // PUBLIC METHODS
        public Start(): void {
            // this._dy = 3; //speed
            this.Reset();   
            this.Main();                    
        }

        public Main(): void {
            

        }


        public Update(): void {
            if(! this._died) {
                this.Move();
                this._checkBounds();
            }
        }

        public Reset(): void {
            this.x = Math.floor((Math.random() * (640 - this.width)) + this.halfWidth);
            this.y = -this.height;
            this._dx = Math.floor((Math.random() * 4) -2);
            this._dy = Math.floor((Math.random() * 5) +5);
            this.canFire = true;
        }

        public Move(): void
        {
            this.x += this._dx;
            this.y += this._dy;
            this.position = new Vector2(this.x, this.y);
        }

    }
}