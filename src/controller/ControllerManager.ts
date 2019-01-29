///<reference path="../view/ViewManager.ts"/>
namespace controller {
    import ViewManager = view.ViewManager;

    export class ControllerManager extends createjs.Container {
        _viewManager: ViewManager;

        constructor() {
            super();
            this._viewManager = new ViewManager();
            this.addChild(this._viewManager)
        }

        public resize(w: number, h: number): void {
            let scale: number;
            scale = w / ViewManager.WIDTH;

            this._viewManager.scaleX = scale;
            this._viewManager.scaleY = scale;

            this._viewManager.x = (window.innerWidth - w) * 0.5;
            this._viewManager.y = (window.innerHeight-h)*0.5;

        }

        enterFrame() {

        }

    }
}