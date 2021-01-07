"use strict";
var config;
(function (config) {
    class Game {
    }
    Game.SCREEN_WIDTH = 640;
    Game.SCREEN_HEIGHT = 800;
    Game.LIVES = 3;
    Game.SCORE = 0;
    Game.HIGH_SCORE = 0;
    Game.ANTIBOOMITEM = 0;
    Game.ENDSCENE = false;
    config.Game = Game;
})(config || (config = {}));
//# sourceMappingURL=game.js.map