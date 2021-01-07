"use strict";
var calculate;
(function (calculate) {
    class Vec2 extends createjs.Point {
        //constructor
        constructor(x = 0, y = 0) {
            super(x, y);
        }
        //public methods
        static Distance(P1, P2) {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
    } //end class
    calculate.Vec2 = Vec2;
})(calculate || (calculate = {})); //end module
//# sourceMappingURL=Vec2.js.map