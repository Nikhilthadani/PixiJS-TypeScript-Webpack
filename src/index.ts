import { Application, Graphics } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const graphics = new Graphics();
graphics.beginFill(0xffffff); // 1st step
graphics.drawRect(20, 50, 100, 80); //2nd step
graphics.endFill(); // 3rd step

// Another Graphic

const graphic2 = new Graphics();
graphic2.beginFill(0xff00000);
graphic2.drawCircle(50, 100, 30);
graphic2.endFill();

app.stage.addChild(graphics);
app.stage.addChild(graphic2);
