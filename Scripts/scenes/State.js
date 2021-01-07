"use strict";
var scenes;
(function (scenes) {
    let State;
    (function (State) {
        State[State["NO_SCENE"] = -1] = "NO_SCENE";
        State[State["START"] = 0] = "START";
        State[State["TUTORIAL"] = 1] = "TUTORIAL";
        State[State["PLAY"] = 2] = "PLAY";
        State[State["STAGE2"] = 3] = "STAGE2";
        State[State["FINALSTAGE"] = 4] = "FINALSTAGE";
        State[State["COMPLETE"] = 5] = "COMPLETE";
        State[State["END"] = 6] = "END";
        State[State["NUM_OF_SCENES"] = 7] = "NUM_OF_SCENES";
    })(State = scenes.State || (scenes.State = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=State.js.map