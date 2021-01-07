"use strict";
var util;
(function (util) {
    class Math {
        static Clamp(value, min, max) {
            if (value < min) {
                value = min;
            }
            else if (value > max) {
                value = max;
            }
            return value;
        }
        static Clamp01(value) {
            if (value < 0.0) {
                return 0.0;
            }
            if (value > 1.0) {
                return 1.0;
            }
            return value;
        }
        static Lerp(a, b, t) {
            return a + (b - a) * Math.Clamp01(t);
        }
        static LerpUnclamped(a, b, t) {
            return a + (b - a) * t;
        }
    }
    util.Math = Math;
})(util || (util = {}));
//# sourceMappingURL=Math.js.map