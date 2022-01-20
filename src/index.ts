import { Loader, Application, Sprite } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader.add("img", "./assets/1.png").load((l) => {
  const sprite = Sprite.from("img");
  app.stage.addChild(sprite);
  sprite.position.set(500);
  sprite.anchor.set(0.5);

  app.ticker.add(() => {
    sprite.rotation += 0.01;
  });
});
