///<reference path="controller/ControllerManager.ts"/>
import ControllerManager = controller.ControllerManager;
import ViewManager = view.ViewManager;

let canvas : Element;
let stage : createjs.Stage;
class Main{
    _controllerManager :ControllerManager;
    constructor()
    {
        let resize = () =>{
           this.canvas_resize();


        };

        canvas = document.getElementById("main");
        stage = new createjs.Stage(canvas);

        this._controllerManager = new ControllerManager();
        stage.addChild(this._controllerManager);

        createjs.Ticker.framerate = 60;
        createjs.Ticker.addEventListener("tick", this.update);

        resize();
        window.addEventListener('resize', resize, false);
    }

    update = ():void => {
        this._controllerManager.enterFrame();
        stage.update();
    };

    canvas_resize() {
        let width:number;
        let height:number;
        if(ViewManager.WIDTH / ViewManager.HEIGHT >= window.innerWidth / window.innerHeight)
        {
            width = window.innerWidth;
            height = width*(ViewManager.HEIGHT / ViewManager.WIDTH);
        }
        else
        {
            height = window.innerHeight;
            width = height*(ViewManager.WIDTH/ViewManager.HEIGHT);
        }
        let windowInnerWidth:string = String(window.innerWidth);
        let windowInnerHeight:string = String(window.innerHeight);
        canvas.setAttribute('width', windowInnerWidth);
        canvas.setAttribute('height', windowInnerHeight);

        this._controllerManager.resize(width ,height);
        stage.update();
    }
}
window.addEventListener("load", () => {
    new Main();
});
