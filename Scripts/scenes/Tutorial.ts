module scenes
{
    export class Tutorial extends objects.Scene
    {
        //public static point:number = 0;
        // PRIVATE INSTANCE MEMBERS
        private _player:objects.Player;
        private _background: objects.Background;
        private _ememies:objects.Enemy[];
        private _playBackSound: createjs.PlayPropsConfig;
        private _bullets: Array<objects.Bullet>;
        private _numOfEnemy:Number =0;
        private fire = true;
        private _bulletImage:objects.Button;
        private _playerBullet:objects.Bullet;
        private _tuto:objects.Image;
        private _startPage:objects.Image;
        private _bulletImg = new Image();
        private _text = new objects.Label();
        /////Test
        //private _engine:createjs.Sprite;

        // CONSTRUCTOR
        constructor()
        {
            super();
            // initialization
            this._player = new objects.Player;
            this._ememies = new Array<objects.Enemy>();
            this._background = new objects.Background();
            this._playBackSound= new createjs.PlayPropsConfig();
            this._bullets = new Array<objects.Bullet>();
            this._numOfEnemy;
            this._bulletImage = new objects.Button();
            this._player = new objects.Player();
            this._playerBullet = new objects.Bullet();
            this._tuto = new objects.Image();
            this._startPage = new objects.Image();
            this._bulletImg.src = "./Assets/images/beam1.png"
            //this._engine = this.EngineAnimation();
            this.Start();
        }

        // PUBLIC METHODS

        //initilize 
        public Start(): void 
        {
            this._background = new objects.Background(config.Game.ASSETS.getResult("background"));
            //Set Number of Enemies
            this._numOfEnemy =2;
            //unlimited background sound
            this._playBackSound= new createjs.PlayPropsConfig().set({interrupt: createjs.Sound.INTERRUPT_ANY, loop: -1, volume: 0.5});
            createjs.Sound.play("playSound", this._playBackSound)
            this._ememies = new Array<objects.Enemy>();
            this._tuto = new objects.Image(config.Game.ASSETS.getResult("TutoK"), 320, 200, true);
            this.AddEnemies(this._numOfEnemy);
            this._text = new objects.Label("Press Space Key : Fire gun \n\nPress Arrow Key : Move\n\nPress 'B' key : Anti-Matter-Boom", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 320, 380, true);
            //this._engine = this.EngineAnimation();
            this.Main();
        }

        public AddEnemies(number:Number):void{
            let createEnemy = setInterval(()=>{
                if(this._ememies.length < number)
                {
                    let enemy = new objects.Enemy(config.Game.ASSETS.getResult("enemy"));
                    this._ememies.push(enemy);
                    this.addChild(enemy)
                    console.log("CREATE")
                }
                else {
                    clearInterval(createEnemy)
                }
            }, 1000)
        }

        public Update(): void 
        {   
            this._background.Update();
            this._player.Update();
            this.UpdateBullets();
            this.UpdatePlayerFire();
            this.UpdatePosition();
            this.UpdateWinOrLoseCondition();
        }

        public Main(): void {
            // adds background to the stage
            this.addChild(this._background);
            this.addChild(this._tuto);
            this.addChild(this._bulletImage);
            this.addChild(this._player);
            this.addChild(this._text);
            this.addChild(this._startPage);
            //this.addChild(this._engine);
            
        }//end public Main() method

        public BulletSpeed(eBullet:objects.Bullet, eSpeed:number, eMove:number, pick:boolean=false):void{
            //enemy direction
            if(pick == true)
            {
                eBullet.y += eSpeed;
                eBullet.position.y += eMove;
                if(eBullet.y >= 800) {
                    this.removeChild(eBullet);
                } 
            }
            //player direction
            else{
                eBullet.y -= eSpeed;
                eBullet.position.y -= eMove;
                if(eBullet.y <= 0) {
                    this.removeChild(eBullet);
                } 
            }
        }

        public UpdatePosition() 
        {
            this._ememies.forEach(enemy => {
                this.addChild(enemy);
                enemy.Update();
                this._bullets.forEach((bullet) => {
                    managers.Collision.AABBCheck(enemy, bullet, 100, true);
                    if(bullet.isColliding) {
                        this.ExploreAnimation(enemy.x, enemy.y);
                        createjs.Sound.play("./Assets/sounds/crash.wav");
                        enemy.position = new objects.Vector2(-100,-200);
                        enemy.died = true;
                        this.removeChild(enemy);
                        bullet.position = new objects.Vector2(-200,-200);
                        this.removeChild(bullet);
                    }
                });

            });

            //Test
            // this._engine.x = this._player.x - 25;
            // this._engine.y = this._player.y + 20;
            
        }//end update positon


        public UpdateBullets() {
            this._bullets.forEach((bullet) => {
                this.BulletSpeed(bullet, 8, 8, false);
            })
        }

        public UpdatePlayerFire() {
            if(config.Game.keyboardManager.fire) {
                if(this.fire) {
                console.log("click1");
                createjs.Sound.play("./Assets/sounds/firstGun1.wav");
                this._playerBullet = new objects.Bullet(this._bulletImg, this._player.x, this._player.y-20, true);
                this._bullets.push(this._playerBullet);
                this.addChild(this._playerBullet);
                this.fire = false;
                }
            }
            if(!config.Game.keyboardManager.fire) {
                this.fire = true;
            }
            
        }

        public ExploreAnimation(obX:number, obY:number) {
            let chopperImg1 = document.createElement('img')
            let chopperImg2 = document.createElement('img')
            let chopperImg3 = document.createElement('img')
            let chopperImg4 = document.createElement('img')
            let chopperImg5 = document.createElement('img')
            let chopperImg6 = document.createElement('img')
            let chopperImg7 = document.createElement('img')
            let chopperImg8 = document.createElement('img')
            let chopperImg9 = document.createElement('img')
            let chopperImg10 = document.createElement('img')
            let chopperImg11 = document.createElement('img')
            let chopperImg12 = document.createElement('img')
            let chopperImg13 = document.createElement('img')
            let chopperImg14 = document.createElement('img')
            let chopperImg15 = document.createElement('img')
            let chopperImg16 = document.createElement('img')

            chopperImg1.src = "./Assets/images/e1.png";
            chopperImg2.src = "./Assets/images/e2.png";
            chopperImg3.src = "./Assets/images/e3.png";
            chopperImg4.src = "./Assets/images/e4.png";
            chopperImg5.src = "./Assets/images/e5.png";
            chopperImg6.src = "./Assets/images/e6.png";
            chopperImg7.src = "./Assets/images/e7.png";
            chopperImg8.src = "./Assets/images/e8.png";
            chopperImg9.src = "./Assets/images/e9.png";
            chopperImg10.src = "./Assets/images/e10.png";
            chopperImg11.src = "./Assets/images/e11.png";
            chopperImg12.src = "./Assets/images/e12.png";
            chopperImg13.src = "./Assets/images/e13.png";
            chopperImg14.src = "./Assets/images/e14.png";
            chopperImg15.src = "./Assets/images/e15.png";
            chopperImg16.src = "./Assets/images/e16.png";

                let spriteSheet = new createjs.SpriteSheet({
                    images: [ chopperImg1, chopperImg2, chopperImg3, chopperImg4, chopperImg5,
                        chopperImg6,chopperImg7, chopperImg8, chopperImg9, chopperImg10, 
                        chopperImg11, chopperImg12, chopperImg13, chopperImg14, chopperImg15, chopperImg16],
                    frames: { width: 150, height: 150, count: 17},
                    animations: {
                        explore: [0, 16, false]
                    }
                });
                let animation = new createjs.Sprite(spriteSheet);
                animation.x = obX -65;
                animation.y = obY -50;
                animation.spriteSheet.getAnimation('explore').speed = 0.5;
                animation.gotoAndPlay('explore');

                this.addChild(animation);
            
        }

        public ShieldAnimation(obX:number, obY:number) {
            let chopperImg1 = document.createElement('img')
            let chopperImg2 = document.createElement('img')
            let chopperImg3 = document.createElement('img')
            let chopperImg4 = document.createElement('img')
            let chopperImg5 = document.createElement('img')
            let chopperImg6 = document.createElement('img')
            let chopperImg7 = document.createElement('img')
            let chopperImg8 = document.createElement('img')
            let chopperImg9 = document.createElement('img')
            let chopperImg10 = document.createElement('img')
            let chopperImg11 = document.createElement('img')
            let chopperImg12 = document.createElement('img')
           
            chopperImg1.src = "./Assets/images/s12.png";
            chopperImg2.src = "./Assets/images/s11.png";
            chopperImg3.src = "./Assets/images/s10.png";
            chopperImg4.src = "./Assets/images/s9.png";
            chopperImg5.src = "./Assets/images/s8.png";
            chopperImg6.src = "./Assets/images/s7.png";
            chopperImg7.src = "./Assets/images/s6.png";
            chopperImg8.src = "./Assets/images/s5.png";
            chopperImg9.src = "./Assets/images/s4.png";
            chopperImg10.src = "./Assets/images/s3.png";
            chopperImg11.src = "./Assets/images/s2.png";
            chopperImg12.src = "./Assets/images/s1.png";
            let spriteSheet = new createjs.SpriteSheet({
                images: [ chopperImg1, chopperImg2, chopperImg3, chopperImg4, chopperImg5,
                    chopperImg6,chopperImg7, chopperImg8, chopperImg9, chopperImg10, 
                    chopperImg11,chopperImg12],
                frames: { width: 136, height: 136, count: 12},
                animations: {
                    shield: [0, 12, false]
                }
            });

            let shieldAnimation = new createjs.Sprite(spriteSheet);
                shieldAnimation.x = obX - 65;
                shieldAnimation.y = obY -50 ;
                shieldAnimation.spriteSheet.getAnimation('shield').speed = 0.5;
                shieldAnimation.gotoAndPlay('shield');

                this.addChild(shieldAnimation);
        }

        public StartAnimation() {
            let chopperImg1 = document.createElement('img')
            let chopperImg2 = document.createElement('img')
            let chopperImg3 = document.createElement('img')
            let chopperImg4 = document.createElement('img')
            let chopperImg5 = document.createElement('img')

            chopperImg1.src = "./Assets/images/startPage.png";
            chopperImg2.src = "./Assets/images/startPage.png";
            chopperImg3.src = "./Assets/images/startPage.png";
            chopperImg4.src = "./Assets/images/startPage.png";
            chopperImg5.src = "./Assets/images/startPage.png";

                let spriteSheet = new createjs.SpriteSheet({
                    images: [ chopperImg1, chopperImg2, chopperImg3, chopperImg4, chopperImg5,],
                    frames: { width: 640, height: 800, count: 5},
                    animations: {
                        start: [0, 5, false]
                    }
                });
                let animation = new createjs.Sprite(spriteSheet);
                animation.x = 320;
                animation.y = 400;
                animation.spriteSheet.getAnimation('start').speed = 3000.0;
                animation.gotoAndPlay('start');

                this.addChild(animation);
                console.log("hello");
            
        }


        public UpdateWinOrLoseCondition() {
            if(managers.Collision.count >= this._numOfEnemy)
            {
                setTimeout(() => {
                    this._startPage = new objects.Image(config.Game.ASSETS.getResult("startPage"), 320, 200, true);
                }, 5000);
                config.Game.SCENE_STATE = scenes.State.PLAY;
                managers.Collision.count = 0;
            }
        }

    }//end class
}//end module