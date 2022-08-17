
        export default class Personajes extends Phaser.Physics.Arcade.Sprite {
            constructor(scene, x, y, texture, scale, dañoPersonaje, vidaPersonaje, timeTurn = 15) {
                //super(scene, x, y, texture, frame);
                super(scene, x, y, texture);
                this.scene = scene;
                //this.animacion = frame;
                this.scene.add.existing(this);
                this.setScale(scale);
                this.dañoPersonaje = dañoPersonaje;
                this.vidaPersonaje = vidaPersonaje;

            }

            get recibirDaño(){
                return texture.setTint(color)
            }
        }


        