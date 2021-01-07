module config
{  
    export class Game
    {
        public static STAGE: createjs.Stage;
        public static SCENE_STATE: scenes.State;
        public static ASSETS: createjs.LoadQueue;
        public static SCREEN_WIDTH:number = 640;
        public static SCREEN_HEIGHT:number = 800;
        public static keyboardManager: managers.Keyboard;
        public static LIVES:number = 3;
        public static SCORE: number = 0;
        public static HIGH_SCORE: number = 0;
        public static ANTIBOOMITEM: number = 0;
        public static STATUS: boolean;
        public static ENDSCENE: boolean = false;
        public static SCORE_BOARD: managers.ScoreBoard;
        public static IMAGE: objects.Button;
    }
}