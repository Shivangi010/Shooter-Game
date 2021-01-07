"use strict";
var managers;
(function (managers) {
    class ScoreBoard {
        //public properties
        //comstructor
        constructor() {
            //private instance members
            this._lives = 0;
            this._score = 0;
            this._livesLabel = new objects.Label;
            this._scoreLabel = new objects.Label;
            this._highScoreLabel = new objects.Label;
            this._highScore = 0;
            this._antiBoomItem = 0;
            this._itemLabel = new objects.Label;
            this._status = false;
            this._initialize();
        }
        get status() {
            return this._status;
        }
        set status(v) {
            this._status = v;
            config.Game.STATUS = this._status;
        }
        get ItemLabel() {
            return this._itemLabel;
        }
        get AntiBoomItem() {
            return this._antiBoomItem;
        }
        set AntiBoomItem(v) {
            this._antiBoomItem = v;
            config.Game.ANTIBOOMITEM = this._antiBoomItem;
            this._itemLabel.setText("Anti Boom: " + this._antiBoomItem);
        }
        get HighScore() {
            return this._highScore;
        }
        set HighScore(v) {
            this._highScore = v;
            config.Game.HIGH_SCORE = this._highScore;
            this._highScoreLabel.setText("HIGH SCORE: " + this._highScore);
        }
        get HighScoreLabel() {
            return this._highScoreLabel;
        }
        get ScoreLabel() {
            return this._scoreLabel;
        }
        get LivesLabel() {
            return this._livesLabel;
        }
        get Score() {
            return this._score;
        }
        set Score(v) {
            this._score = v;
            config.Game.SCORE = this._score;
            this._scoreLabel.text = " : " + this._score;
        }
        get Lives() {
            return this._lives;
        }
        set Lives(v) {
            this._lives = v;
            config.Game.LIVES = this._lives;
            this._livesLabel.text = " : " + this._lives;
        }
        //private method
        // public ScoreLabel:objects.Label;
        // public LivesLabel:objects.Label;
        _initialize() {
            this._livesLabel = new objects.Label("3", "23px", "Impact, Charcoal, sans-serif", "#fff", 50, 30, true);
            this._scoreLabel = new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 450, 30, true);
            this._highScoreLabel = new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 320, 30, true);
            this._itemLabel = new objects.Label("0", "23px", "Impact, Charcoal, sans-serif", "#ffffff", 550, 60, true);
            this.Lives = config.Game.LIVES;
            this.Score = config.Game.SCORE;
            this.HighScore = config.Game.HIGH_SCORE;
            this.AntiBoomItem = config.Game.ANTIBOOMITEM;
        }
    }
    managers.ScoreBoard = ScoreBoard;
})(managers || (managers = {}));
//# sourceMappingURL=ScoreBoard.js.map