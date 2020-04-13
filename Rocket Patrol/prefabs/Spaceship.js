//Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
      super(scene, x, y, texture, frame);
  
      //add object to existing scene
      scene.add.existing(this);
      //stores pointValue
      this.points = pointValue;
    }
    update() {
        //move spaceship left
        this.x -= 3;
        //wrap from left to right
        if(this.x <= 0-this.width) {
            this.reset();
        }
    }
    reset() {
        this.x = game.config.width;
    }
}