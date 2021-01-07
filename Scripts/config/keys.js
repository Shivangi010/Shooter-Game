"use strict";
var config;
(function (config) {
    class Keys {
    }
    //arrow keys
    Keys.LEFT_ARROW = 37;
    Keys.RIGHT_ARROW = 39;
    Keys.UP_ARROW = 38;
    Keys.DOWN_ARROW = 40;
    //WASD keys
    Keys.W = 87;
    Keys.A = 65;
    Keys.S = 83;
    Keys.D = 68;
    //space bar_Shot gun
    Keys.SPACE = 32;
    //ESC key
    Keys.ESCAPE = 27;
    //Control key
    Keys.PAUSE = 17;
    //M key_mute music
    //public static MUTE:number=77;
    //Alt key_anti_boom
    Keys.B = 66;
    config.Keys = Keys;
})(config || (config = {}));
//# sourceMappingURL=keys.js.map