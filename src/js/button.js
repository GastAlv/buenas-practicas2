// Clase Boton, para no repetir tanto codigo
/* class Button {
    constructor(x, y, label, size = 16, scene, callback, texture) {
        const button = scene.add.text(x, y, label, {fontSize: size})
        .setOrigin(0.5)
        .setPadding(90,20,90,20)
        .setStyle({ 
            // fontSize: '50px', 
            fill: '#7D8E69', 
            fontFamily: "asian"
        })
        .setInteractive({ useHandCursor: true })
        //.on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() =>Borrar);
        .on('pointerdown', () => callback())
        .on('pointerover', () => button.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => button.setStyle({ fill: '#7D8E69' }))
        // const image =  scene.add.image
    }
    
} */

export default class Button{
    constructor(scene, x, y, text, size, callback, scale){
        const img = scene.add.image(0, 0, 'botonM').setInteractive({ useHandCursor: true })
        .on("pointerdown", () => callback())
        .on("pointerover", ()=> img.setScale(scale - 0.02))
        .on("pointerout", ()=> img.setScale(scale))
        const txt = scene.add.text(0, 0, text, {fontSize: size})
        .setOrigin(0.5)
        .setStyle({fontFamily: 'asian'})
        const arr = [img, txt]
        const container = scene.add.container(x, y, arr).setScale(scale)
    }
}


function loadFont(name, url) {
    var newFont = new FontFace(name, `url(${url})`);
    newFont.load().then(function (loaded) {
        document.fonts.add(loaded);
    }).catch(function (error) {
        return error;
    });
}

function Borrar(bAtaque){
    bAtaque.visible = false;
    /*bObEstats.visible = false;
    bObjeto.visible = false;*/

    if(bAtaque.visible === true){
    bAtaque.visible = false;;
    };
};

loadFont("asian", "../public/assets/fuentes/OPTIAsian.otf");

