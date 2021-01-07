//IIFE -- Immediately Invoked Function Expression
// mean? is an anonymous self-executing function
let game1 = (function () {
    let canvas: HTMLCanvasElement = document.getElementsByTagName('canvas')[0];
    let stage: createjs.Stage;
    let assets: createjs.LoadQueue;
    let currentSceneState: scenes.State;
    let currentScene: objects.Scene;
    let keyboardManager: managers.Keyboard;

    let assetManifast = [
        { id: "placeholder", src: "./Assets/images/placeholder.png" },
        { id: "placeholder1", src: "./Assets/images/placeholder1.png" },
        { id: "background", src: "./Assets/images/background.gif" },
        { id: "background2", src: "./Assets/images/Testing-01.gif" },
        { id: "background3", src: "./Assets/images/background3.gif" },
        { id: "enemy", src: "./Assets/images/enemy.png" },
        { id: "boss", src: "./Assets/images/finalEnamy.png" },
        { id: "enemy02", src: "./Assets/images/enemy02.png" },
        { id: "enemy03", src: "./Assets/images/enemy03.png" },
        { id: "player", src: "./Assets/images/Player.png" },
        { id: "firstScreen", src: "./Assets/images/firstScreen.png" },
        { id: "beam1", src: "./Assets/images/beam1.png" },
        { id: "beam2", src: "./Assets/images/enemyBeam01.png" },
        { id: "beam3", src: "./Assets/images/beam2.png" },
        { id: "beam4", src: "./Assets/images/beam4.png" },
        { id: "beam5", src: "./Assets/images/beam5.png" },
        { id: "enemyBeam", src: "./Assets/images/enemyBeamYellow.png" },
        { id: "bullet", src: "./Assets/images/bullet.png" },
        { id: "score", src: "./Assets/images/score.png" },
        { id: "life", src: "./Assets/images/life.png" },
        { id: "levelup", src: "./Assets/images/levelup.png" },
        { id: "points", src: "./Assets/images/points.png" },
        { id: "health", src: "./Assets/images/h01.png" },
        { id: "antiBoom", src: "./Assets/images/antiBoom.png" },
        { id: "Blackhole", src: "./Assets/images/Blackhole.png" },
        { id: "Tuto", src: "./Assets/images/tutorial.png" },
        { id: "TutoK", src: "./Assets/images/tuto.png" },
        { id: "startPage", src: "./Assets/images/startPage.png" },
        // {id: "explore", src: "./Assets/images/explore.gif"},
        // {id: "explore1", src: "./Assets/images/explore1.gif"},
        //buttons
        { id: "startButton", src: "./Assets/images/startButton.png" },
        { id: "returnButton", src: "./Assets/images/restartButton.png" },

        //Sounds
        { id: "playSound", src: "./Assets/sounds/BackSound.mp3" },
        { id: "startSound", src: "./Assets/sounds/BackSound.mp3" },
        { id: "crashSound", src: "./Assets/sounds/crash.wav" },
        { id: "powerup", src: "./Assets/sounds/PowerUp.wav" },
        { id: "crashSoundP", src: "./Assets/sounds/crashPlayer.wav" },
        { id: "break", src: "./Assets/sounds/break.wav" },
        { id: "powerup", src: "./Assets/sounds/powerup.wav" },
        { id: "exp1", src: "./Assets/sounds/exp1.wav" },
        { id: "exp2", src: "./Assets/sounds/exp2.wav" },
        { id: "breakAudio", src: "./Assets/sounds/points.wav" }

    ];

    // comments from Tom
    function Preload(): void {
        assets = new createjs.LoadQueue();
        config.Game.ASSETS = assets;
        assets.installPlugin(createjs.Sound);
        assets.loadManifest(assetManifast);
        assets.on("complete", Start);
    }


    /**
     * Perform Initialization in the Start function
     *
     */
    function Start(): void {
        console.log(`%c Game Started`, "color: blue; font-size:20px;");
        stage = new createjs.Stage(canvas);
        config.Game.STAGE = stage; // create a reference to the Global Stage
        createjs.Ticker.framerate = 60; // declare the framerate as 60FPS
        createjs.Ticker.on('tick', Update);
        stage.enableMouseOver(20);

        currentSceneState = scenes.State.NO_SCENE;
        config.Game.SCENE_STATE = scenes.State.START;
        keyboardManager = new managers.Keyboard();
        config.Game.keyboardManager = keyboardManager;
    }

    /**
     * This is the main Game Loop
     * This function 'triggers' every frame
     */
    function Update(): void {
        if (currentSceneState != config.Game.SCENE_STATE) {
            Main();
        }

        currentScene.Update();
        stage.update();
    }

    /**
     * This function is the main function of the game
     *
     */
    function Main(): void {
        console.log(`%c Switching Scenes`, "color: green; font-size:16px;");
        // cleanup
        if (currentSceneState != scenes.State.NO_SCENE) {
            currentScene.removeAllChildren();
            stage.removeAllChildren();
        }

        // state machine
        switch (config.Game.SCENE_STATE) {
            case scenes.State.START:
                currentScene = new scenes.Start();
                break;
            case scenes.State.TUTORIAL:
                currentScene = new scenes.Tutorial();
                break;
            case scenes.State.PLAY:
                currentScene = new scenes.Play();
                break;
            case scenes.State.STAGE2:
                currentScene = new scenes.Stage2();
                break;
            case scenes.State.FINALSTAGE:
                currentScene = new scenes.FinalStage();
                break;
            case scenes.State.COMPLETE:
                currentScene = new scenes.Complete();
                break;
            case scenes.State.END:
                currentScene = new scenes.End();
                break;

        }
        // add the scene to the stage and setup the current scene
        stage.addChild(currentScene);
        currentSceneState = config.Game.SCENE_STATE;
    }
    window.addEventListener("load", Preload);
})();