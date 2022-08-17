import Button from "../js/button.js";
// Clase MainMenu, donde se crean los botones, el logo y el fondo del menú principal
export class MainMenu extends Phaser.Scene {
  constructor() {
    // Se asigna una key para despues poder llamar a la escena
    super("MainMenu");
  }

  create() {
    let backMenu = this.add.image(this.cameras.main.centerX, this.cameras.main.centerY, "mainMenu")
    .setScale(.67);
    
    const buttonJugar = new Button(this, 750, 205, 'JUGAR', 80, () => this.scene.start('SelecFacc'), 0.67);
    const buttonAyuda = new Button(this, 756, 348, 'AYUDA', 70, () => this.scene.start('Ayuda'), 0.50);
    const buttonOpciones = new Button(this, 760, 478, 'CREDITOS', 60, () => this.scene.start('Creditos'), 0.43);

/* 

    // Boton para comenzar a jugar
    let botonJugar = new Button(750, 205, 'JUGAR', 80, this, () => this.scene.start('SelecFacc'))
    let botonJgar = this.add.image(750, 195, 'botonM')
    .setScale(.67);
    
    // Boton para solicitar ayuda.
    let botonAyuda = new Button(756, 355, 'AYUDA', 70, this, () => this.scene.start('Ayuda') )
    let botonAyda = this.add.image(756, 348, 'botonM')
     .setScale(.54);

    // Boton para ingresar a creditos.

    let botonCreditos = new Button(760, 490, 'CREDITOS', 60, this, () => this.scene.start('Creditos'))
    let botonCre = this.add.image(760, 478, 'botonM')
    .setScale(.43); */





  }
  update(){
    
  }
}
