var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var view;
(function (view) {
    var ViewManager = /** @class */ (function (_super) {
        __extends(ViewManager, _super);
        function ViewManager() {
            var _this = _super.call(this) || this;
            var clickHanlder = function () {
                var randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                g.beginFill(randomColor);
                g.drawRect(0, 0, 120, 50);
            };
            var fullScreenHandler = function () {
                var elem = document.documentElement;
                //let elem = document.getElementById("container");
                console.log("elem :" + elem);
                //@ts-ignore
                if (document.fullscreen) {
                    document.webkitExitFullscreen();
                }
                else {
                    elem.webkitRequestFullscreen();
                }
                //let elem = document.documentElement;
                /*
                                let elem = document.getElementById("container");
                                //@ts-ignore
                                if (document.fullscreen) {
                                    document.exitFullscreen();
                                }
                                else {
                                    elem.requestFullscreen();
                                }
                */
            };
            var background = new createjs.Shape();
            _this.addChild(background);
            var backgroundGraphic = background.graphics;
            backgroundGraphic.beginFill("#FFCCCC");
            backgroundGraphic.drawRect(0, 0, ViewManager.WIDTH, ViewManager.HEIGHT);
            var container = new createjs.Container();
            _this.addChild(container);
            var shape = new createjs.Shape();
            var g = shape.graphics;
            g.beginFill("red");
            g.drawRect(0, 0, 120, 50);
            container.addChild(shape);
            //
            container.x = 640 - 120 - 20;
            container.y = 200;
            container.addEventListener("click", clickHanlder);
            container = new createjs.Container();
            _this.addChild(container);
            var fullScreenShape = new createjs.Shape();
            var fullScreenGraphics = fullScreenShape.graphics;
            fullScreenGraphics.beginFill("red");
            fullScreenGraphics.drawRect(0, 0, 120, 50);
            container.addChild(fullScreenShape);
            container.x = 20;
            container.y = 20;
            fullScreenShape.addEventListener("click", fullScreenHandler);
            return _this;
        }
        ViewManager.WIDTH = 800;
        ViewManager.HEIGHT = 600;
        return ViewManager;
    }(createjs.Container));
    view.ViewManager = ViewManager;
})(view || (view = {}));
///<reference path="../view/ViewManager.ts"/>
var controller;
///<reference path="../view/ViewManager.ts"/>
(function (controller) {
    var ViewManager = view.ViewManager;
    var ControllerManager = /** @class */ (function (_super) {
        __extends(ControllerManager, _super);
        function ControllerManager() {
            var _this = _super.call(this) || this;
            _this._viewManager = new ViewManager();
            _this.addChild(_this._viewManager);
            return _this;
        }
        ControllerManager.prototype.resize = function (w, h) {
            var scale;
            scale = w / ViewManager.WIDTH;
            this._viewManager.scaleX = scale;
            this._viewManager.scaleY = scale;
            this._viewManager.x = (window.innerWidth - w) * 0.5;
            this._viewManager.y = (window.innerHeight - h) * 0.5;
        };
        ControllerManager.prototype.enterFrame = function () {
        };
        return ControllerManager;
    }(createjs.Container));
    controller.ControllerManager = ControllerManager;
})(controller || (controller = {}));
///<reference path="controller/ControllerManager.ts"/>
var ControllerManager = controller.ControllerManager;
var ViewManager = view.ViewManager;
var canvas;
var stage;
var Main = /** @class */ (function () {
    function Main() {
        var _this = this;
        this.update = function () {
            _this._controllerManager.enterFrame();
            stage.update();
        };
        var resize = function () {
            _this.canvas_resize();
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
    Main.prototype.canvas_resize = function () {
        var width;
        var height;
        if (ViewManager.WIDTH / ViewManager.HEIGHT >= window.innerWidth / window.innerHeight) {
            width = window.innerWidth;
            height = width * (ViewManager.HEIGHT / ViewManager.WIDTH);
        }
        else {
            height = window.innerHeight;
            width = height * (ViewManager.WIDTH / ViewManager.HEIGHT);
        }
        var windowInnerWidth = String(window.innerWidth);
        var windowInnerHeight = String(window.innerHeight);
        canvas.setAttribute('width', windowInnerWidth);
        canvas.setAttribute('height', windowInnerHeight);
        this._controllerManager.resize(width, height);
        stage.update();
    };
    return Main;
}());
window.addEventListener("load", function () {
    new Main();
});
var events;
(function (events) {
    var CustomEvent = /** @class */ (function (_super) {
        __extends(CustomEvent, _super);
        function CustomEvent(type, bubbles, cancelable) {
            if (bubbles === void 0) { bubbles = null; }
            if (cancelable === void 0) { cancelable = null; }
            return _super.call(this, type, bubbles, cancelable) || this;
        }
        return CustomEvent;
    }(createjs.Event));
    events.CustomEvent = CustomEvent;
})(events || (events = {}));
//# sourceMappingURL=ts.js.map