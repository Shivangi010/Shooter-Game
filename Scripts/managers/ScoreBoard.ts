module managers
{
    export class ScoreBoard
    {
        //private instance members
        private _lives : number =0;
        private _score : number =0;
        private _livesLabel : objects.Label = new objects.Label;
        private _scoreLabel : objects.Label = new objects.Label;
        private _highScoreLabel : objects.Label = new objects.Label;
        private _highScore : number =0;
        private _antiBoomItem : number =0;
        private _itemLabel : objects.Label = new objects.Label;
        private _status : boolean = false;

        public get status() : boolean 
        {
            return this._status;
        }
        public set status(v : boolean ) 
        {
            this._status = v;
            config.Game.STATUS = this._status;
        }
        

        public get ItemLabel() : objects.Label 
        {
            return this._itemLabel;
        }

        public get AntiBoomItem() : number 
        {
            return this._antiBoomItem;
        }

        public set AntiBoomItem(v : number) 
        {
            this._antiBoomItem = v;
            config.Game.ANTIBOOMITEM = this._antiBoomItem;
            this._itemLabel.setText("Anti Boom: " + this._antiBoomItem);
        }
        
        public get HighScore() : number 
        {
            return this._highScore;
        }
        public set HighScore(v : number) 
        {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
            this._highScoreLabel.setText("HIGH SCORE: " + this._highScore);
        }
 
        public get HighScoreLabel() : objects.Label 
        {
            return this._highScoreLabel;
        }

        public get ScoreLabel():objects.Label
        {
            return this._scoreLabel;
        }

        public get LivesLabel() :objects.Label
        {
            return this._livesLabel;
        }
        
        public get Score() : number {
            return this._score;
        }

        public set Score(v : number) {
            this._score = v;
            config.Game.SCORE = this._score;
            this._scoreLabel.text = " : " + this._score;
        }
        
        public get Lives() : number {
            return this._lives;
        }
        public set Lives(v : number) 
        {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this._livesLabel.text = " : " + this._lives;
        }
        
        //public properties
        //comstructor
        constructor()
        {
            this._initialize();
        }

        //private method

        // public ScoreLabel:objects.Label;
        // public LivesLabel:objects.Label;

        public _initialize()
        {
            this._livesLabel = new objects.Label("3", "23px", "Impact, Charcoal, sans-serif", "#fff", 50, 30, true);
            this._scoreLabel = new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 450, 30, true);
            this._highScoreLabel = new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 320, 30, true);
            this._itemLabel= new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 550, 60, true);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
            this.AntiBoomItem = config.Game.ANTIBOOMITEM;
        }
    }
}