import { AnimatedSprite, Application, Loader, Texture } from "pixi.js";

const app = new Application({
  width: innerWidth,
  height: innerHeight,
});

document.body.appendChild(app.view);

const loader = Loader.shared;

loader
  .add("./assets/spritesheet.json")
  .add("./assets/fighter.json")
  .load(() => {
    const textures: Texture[] = [];

    for (let i = 1; i <= 4; i++) {
      const texture = Texture.from(`RunRight0${i}.png`);
      textures.push(texture);
    }
    console.log(textures);

    const animatedSprite = new AnimatedSprite(textures);
    animatedSprite.x = 200;
    animatedSprite.y = 100;
    animatedSprite.play(); // Will run the animation

    app.stage.addChild(animatedSprite);
    animatedSprite.animationSpeed = 0.5;

    const jetArray = [];
    for (let i = 0; i <= 29; i++) {
      const texture = Texture.from(`rollSequence00${i}.png`);
      jetArray.push(texture);
    }
    console.log(jetArray);

    const jetSprite = new AnimatedSprite(jetArray);
    jetSprite.x = 200;
    jetSprite.y = 200;
    jetSprite.play();
    app.stage.addChild(jetSprite);

    function backToPosition() {
      if (jetSprite.y == -100) {
        jetSprite.y = screen.height;
      }

      if (animatedSprite.x === 1000) {
        animatedSprite.x = 10;
      }
    }
    app.ticker.add(() => {
      animatedSprite.x += 10;
      jetSprite.y -= 10;
      backToPosition();
    });
  });
