module scenes
{
    export class Start extends objects.Scene
    {
        // PRIVATE INSTANCE MEMBERS
        private _startButton:objects.Button;
        private _background: objects.Background;
        private _firstSceen: objects.Image;
        private _tutorialButton:objects.Button;

        // PUBLIC PROPERTIES

        // CONSTRUCTOR
        constructor()
        {
            super();
            // initialization
            this._startButton = new objects.Button();
            this._background = new objects.Background();
            this._firstSceen = new objects.Image();
            this._tutorialButton = new objects.Button();
            this.Start();
        }

        // PUBLIC METHODS

        public Start(): void 
        {
            this._background = new objects.Background(config.Game.ASSETS.getResult("background"));
            this._firstSceen = new objects.Image(config.Game.ASSETS.getResult("firstScreen"), 320, 400, true);
            this._startButton = new objects.Button(config.Game.ASSETS.getResult("startButton"), 320, 580, true);
            this._tutorialButton = new objects.Button(config.Game.ASSETS.getResult("Tuto"), 550, 700, true);
            createjs.Sound.play("startSound");
            this.Main();
        }        
        
        public Update(): void 
        {
            this._background.Update();
        }
        
        public Main(): void {
            this.addChild(this._background);
            this.addChild(this._firstSceen);
            this.addChild(this._startButton);
            this.addChild(this._tutorialButton);
    
            this._startButton.on("click", function() {
                //changed it for the testing
                config.Game.SCENE_STATE = scenes.State.PLAY;
                createjs.Sound.stop();
            });
            this._tutorialButton.on("click", function() {
                //changed it for the testing
                config.Game.SCENE_STATE = scenes.State.TUTORIAL;
                createjs.Sound.stop();
            });
        }

        
    }
}