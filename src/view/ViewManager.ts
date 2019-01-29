namespace view {
    export class ViewManager extends createjs.Container {
        public static WIDTH: number = 800;
        public static HEIGHT: number = 600;

        constructor() {
            super();
            const clickHanlder = () => {
                let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                g.beginFill(randomColor);
                g.drawRect(0, 0, 120, 50);
            };
            const fullScreenHandler = () => {

                let elem = document.documentElement;
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

            }
            let background:createjs.Shape = new createjs.Shape();
            this.addChild(background)
            let backgroundGraphic:createjs.Graphics = background.graphics;
            backgroundGraphic.beginFill("#FFCCCC");
            backgroundGraphic.drawRect(0,0,ViewManager.WIDTH,ViewManager.HEIGHT);


            let container: createjs.Container = new createjs.Container();
            this.addChild(container);

            let shape: createjs.Shape = new createjs.Shape();
            let g: createjs.Graphics = shape.graphics;
            g.beginFill("red");
            g.drawRect(0, 0, 120, 50);
            container.addChild(shape);

            //
            container.x = 640 - 120 - 20;
            container.y = 200;
            container.addEventListener("click", clickHanlder);

            container = new createjs.Container();
            this.addChild(container);

            let fullScreenShape = new createjs.Shape();
            let fullScreenGraphics = fullScreenShape.graphics;
            fullScreenGraphics.beginFill("red");
            fullScreenGraphics.drawRect(0, 0, 120, 50);
            container.addChild(fullScreenShape);

            container.x = 20;
            container.y = 20;
            fullScreenShape.addEventListener("click", fullScreenHandler);


        }


    }
}