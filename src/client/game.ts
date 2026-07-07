import Phaser from "phaser";

const gameRootId = "game-root";

class LabyrinthScene extends Phaser.Scene {
  private titleText?: Phaser.GameObjects.Text;

  constructor() {
    super("LabyrinthScene");
  }

  create() {
    this.cameras.main.setBackgroundColor("#000000");

    this.titleText = this.add
      .text(0, 0, "LABYRINTH", {
        color: "#ffffff",
        fontFamily: "Arial, Helvetica, sans-serif",
        fontSize: "48px",
      })
      .setOrigin(0.5);

    this.centerTitle();
    this.scale.on("resize", this.centerTitle, this);
  }

  private centerTitle() {
    if (!this.titleText) {
      return;
    }

    this.titleText.setPosition(this.scale.width / 2, this.scale.height / 2);
  }
}

new Phaser.Game({
  type: Phaser.AUTO,
  parent: gameRootId,
  backgroundColor: "#000000",
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: "100%",
    height: "100%",
  },
  scene: LabyrinthScene,
});
