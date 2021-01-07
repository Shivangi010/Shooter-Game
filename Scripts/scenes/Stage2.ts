module scenes {
    export class Stage2 extends objects.Scene {
        // PRIVATE INSTANCE MEMBERS
        private _background: objects.Background;
        private _scoreBoard: managers.ScoreBoard = new managers.ScoreBoard;
        //private _pointLabel:objects.Label;
        //private _liveLabel:objects.Label;
        private _lifeImage: objects.Button;
        private _scoreImage: objects.Button;
        private _pointsUp: objects.Image;
        private _levelup: objects.Image;
        private _bulletNumLabel: objects.Label;
        private fire = true;
        // private _point:number;
        private _blackhole: objects.Blackhole;

        private _antiBoom = true;

        private _ememies: objects.Enemy[];
        private _enemybullets: Array<objects.Bullet>;
        private _numOfEnemy: number = 10;

        private _player: objects.Player;
        private _bullets: Array<objects.Bullet>;
        private _playerBullet: objects.Bullet;
        private _bulletNum = 30;

        private _bulletImage: objects.Button;
        private _bulletImg = new Image();
        private _antiBoomImage: objects.Image;
        private _healthup: objects.Image;

        private _count: number = 0;
        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor() {
            super();
            // initialization
            this._player = new objects.Player;
            this._ememies = new Array<objects.Enemy>();
            this._background = new objects.Background();
            this._enemybullets = new Array<objects.Bullet>();
            this._bullets = new Array<objects.Bullet>();
            this._bulletImage = new objects.Button();
            this._bulletImg.src = "./Assets/images/beam1.png"
            this._bulletNumLabel = new objects.Label();
            this._playerBullet = new objects.Bullet();
            //this._pointLabel = new objects.Label();
            //this._liveLabel = new objects.Label();
            this._bulletImage = new objects.Button();
            this._pointsUp = new objects.Image();
            this._scoreImage = new objects.Button();
            this._lifeImage = new objects.Button();
            this._levelup = new objects.Image();
            this._healthup = new objects.Image();
            this._blackhole = new objects.Blackhole();
            this._antiBoomImage = new objects.Image();
            this._numOfEnemy = 10;
            this._count = this._numOfEnemy;
            this._bulletNum = 30;
            // this._point = 0;
            this.Start();
        }

        public UpdatePosition() {
            this._ememies.forEach(enemy => {
                this.addChild(enemy);
                enemy.Update();
                
            });

        }//end update positon

        
        public UpdateBullets() {
            this._bullets.forEach((bullet) => {
                this.BulletSpeed(bullet, 10, 10, false);
            })
            this._ememies.forEach(enemy => {
                enemy.addEventListener("tick", () => {

                    if (enemy.canShoot()) {
                        let bullet = new objects.Bullet(config.Game.ASSETS.getResult("enemyBeam"), enemy.x + 40, enemy.y + 50, true);
                        this._enemybullets.push(bullet);
                        this.addChild(bullet);
                    }
                });
            })
            this._enemybullets.forEach((bullet) => {
                this.BulletSpeed(bullet, 10, 10, true);
            })
        }

        public BulletSpeed(eBullet: objects.Bullet, eSpeed: number, eMove: number, pick: boolean = false): void {
            //enemy direction
            if (pick == true) {
                eBullet.y += eSpeed;
                eBullet.position.y += eMove;
                if (eBullet.y >= 800) {
                    this.removeChild(eBullet);
                }
            }
            //player direction
            else {
                eBullet.y -= eSpeed;
                eBullet.position.y -= eMove;
                if (eBullet.y <= 0) {
                    this.removeChild(eBullet);
                }
            }
        }


        // PUBLIC METHODS
        public Start(): void {
            this._background = new objects.Background(config.Game.ASSETS.getResult("background2"));
            this._blackhole = new objects.Blackhole();
            this._ememies = new Array<objects.Enemy>();
            this._bulletImage = new objects.Button(config.Game.ASSETS.getResult("bullet"), 560, 30, true);
            this._bulletImage = new objects.Button(config.Game.ASSETS.getResult("bullet"), 560, 30, true);
            this._scoreImage = new objects.Button(config.Game.ASSETS.getResult("score"), 420, 30, true);
            this._lifeImage = new objects.Button(config.Game.ASSETS.getResult("life"), 30, 30, true);
            this._bulletNumLabel = new objects.Label("bullets:", "23px", "Impact, Charcoal, sans-serif", "#fff", 610, 30, true);
            //this._pointLabel = new objects.Label("Scores: 0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 480, 30, true);
            //this._liveLabel = new objects.Label("Live: 3", "23px", "Impact, Charcoal, sans-serif", "#fff", 75, 30, true);
            this._levelup = new objects.Image(config.Game.ASSETS.getResult("levelup"), 400, 50, true);
            this._antiBoomImage = new objects.Image(config.Game.ASSETS.getResult("antiBoom"),
                this._antiBoomImage.RandomPoint(true).x, this._antiBoomImage.RandomPoint(true).y, true);
            config.Game.SCORE_BOARD = this._scoreBoard;
            this._scoreBoard.HighScore = config.Game.HIGH_SCORE;
            this.Main();
        }//end start

        public Update(): void {

            this._player.Update();
            this.UpdatePosition();

            managers.Collision.AABBCheck(this._player, this._levelup, 0);
            if (this._levelup.isColliding) {
                this.removeChild(this._levelup);
                this._bulletImg.src = "./Assets/images/beam3.png";
                createjs.Sound.play("./Assets/sounds/powerup.wav");
            }

            //checking whether  points is colliding with the player
            if (this._pointsUp.getStatus()) {
                this._pointsUp.Update()
                managers.Collision.AABBCheck(this._player, this._pointsUp);
                if (this._pointsUp.isColliding) {
                    createjs.Sound.play("./Assets/sounds/points.wav");
                    config.Game.SCORE_BOARD.Score += 400;
                    console.log("Collided")
                    this.removeChild(this._pointsUp);
                    this._pointsUp.setStatus(false);
                }
            }
        }//end update

        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._scoreImage);
            this.addChild(this._player);
            this.addChild(this._scoreBoard.ScoreLabel);
            this.addChild(this._scoreBoard.HighScoreLabel);

        }//end main

        //ANTI-Matter-Boom
        public killAll(): void {
        }

        //#########################################
        //      FIRE SHOOT WITH SPACE BUTTON
        //#########################################
        public UpdatePlayerFire() {
            if (config.Game.keyboardManager.fire) {
                if (this.fire) {
                    console.log("click1");
                    this._bulletNum--;
                    createjs.Sound.play("./Assets/sounds/firstGun1.wav");
                    this._playerBullet = new objects.Bullet(this._bulletImg, this._player.x, this._player.y - 20, true);
                    this._bullets.push(this._playerBullet);
                    this.addChild(this._playerBullet);
                    this.fire = false;
                }
            }
            if (!config.Game.keyboardManager.fire) {
                this.fire = true;
            }
        }//end UpdatePlayerFire


    }
}
