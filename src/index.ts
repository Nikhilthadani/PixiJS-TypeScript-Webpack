import { Loader, Application, Sprite, Graphics } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;
loader.add("img", "./assets/1.png").load((l) => {
  const graphics = new Graphics();
  graphics.beginFill();
  graphics.drawRect(100, 100, 150, 150);
  graphics.endFill();
  app.stage.addChild(graphics);
  const sprite = Sprite.from("img");
  app.stage.addChild(sprite);

  sprite.mask = graphics;
});
