import Button from "../js/button.js";
//import HealthBar from "../js/barraVida.js";
//import barraV from "../js/barraVida.js";
//import barraVida from "../js/barraVida.js";
import Personajes from "../js/personajes.js";
var score;
var perS01;
export class PlayZoom extends Phaser.Scene {
    
    constructor(){+
        super("PlayZoom")
    }
    

    init(data) {
        // recupera el valor SCORE enviado como dato al inicio de la escena
        perS01 = data.perS01;
        score = data.score;
        //console.log(score)
        this.registry.events.on('changedata', (perS01, vida, data) => {
            if ('vida' === 'vida'){
                console.log(data)
            }
        })
        //console.log('combate1')
      }

    preload(){
        //this.load.image('B', "public/assets/images/boton2.png");
        this.load.image('b2', "public/assets/images/boton2.png");
        
        //vida
        this.load.image("vida", "public/assets/images/vida.png")
        this.load.image("vidaBack", "public/assets/images/vidaBack.png")




        console.log('MainScene');
        this.restarVidas = 50;
        //this.scene.launch('UI');

    }
    create(){
        //this.registry.events.emit('combate1')
        /*this.registry.events.on('changedata', (parent,key, data) => {
            if ('vida' === 'vida'){
                console.log(data)
            }
        })*/
        

        

        this.image = this.add.image(640, 360, 'backPuente1');
        this.image = this.add.image(640, 360, 'backPuente2');

        this.add.image(this.cameras.main.centerX, 570, 'botonV');



        
        //-----------     UI JUGADOR 1     ------------// 
        //botonAtaques
        this.backBoton = this.add.image(180, 541, 'B');
        this.botonAt = this.add.text(120, 520, 'ATAQUES')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = false;
            this.botonOb.visible = false;
            ataque1.visible = true;
            ataque2.visible = true;
            ataque3.visible = true;
            backBotonAt3.visible = true;
            backBoton1.visible = false;
            backBoton2.visible = true;

        })
        .on('pointerover', () => this.botonAt.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonAt.setStyle({ fill: '#7D8E69' }));
        

        //botonObjetos
        this.backBoton = this.add.image(180, 620, 'B');
        this.botonOb = this.add.text(120, 600, 'OBJETOS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = false;
            //this.A1.visible = true;
            //A1a.visible = false;
            botonOb.visible = true;
        })
        .on('pointerover', () => this.botonOb.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonOb.setStyle({ fill: '#7D8E69' }));
        
        
        //botonEstadisticas
        let backBoton1 = this.add.image(405, 580, 'B')
        .setScale(1, 2+0.08);
        let backBoton2 = this.add.image(405, 542, 'B')
        backBoton2.visible = false;

        this.botonEst = this.add.text(320, 520, 'ESTADISTICAS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonEst.visible = false;
            //this.A1.visible = true;
            //A1a.visible = false;
            botonOb.visible = true;
        })
        .on('pointerover', () => this.botonEst.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonEst.setStyle({ fill: '#7D8E69' }));



          //texto Ataque1
        let ataque1 = this.add.text(120, 520, 'GOLPE')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible = false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
            this.golpe(peonS, 'peonSA1')
            this.restarVida(peonS, peonV)
            this.die(peonV, peonV)
            peonV.setTint(0xFF0000)
            this.daño(peonV)
            //peonS.play({key: 'peonSA1', repeat: 0});
            //this.setValue(healthBar, 10)
            //this.recibirDaño(healthBar, 20)
            /*if ((parseInt(peonV.getData('lifePeonV')) - this.restarVidas) >= 0) {
                peonV.setData('lifePeonV', peonV.getData('lifePeonV') - this.restarVidas);
                peonV.setTint(0xFF0000)
                this.daño(peonV)
                console.log(peonV.getData('lifePeonV'))
            }
            this.registry.events.emit('lifePeonV', this.image.getData('lifePeonV'));*/
        })
        .on('pointerover', () => ataque1.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque1.setStyle({ fill: '#7D8E69' }));
        ataque1.visible = false;

        //ataque2
        let ataque2 = this.add.text(120, 600, 'CURAR')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible = false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
            this.setValue(healthBar, 120)
        })
        .on('pointerover', () => ataque2.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque2.setStyle({ fill: '#7D8E69' }));
        ataque2.visible = false;

        //ataque3
        let backBotonAt3 = this.add.image(405, 620, 'B')
        backBotonAt3.visible = false;
        let ataque3 = this.add.text(320, 600, 'ENFADO')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAt.visible = true;
            this.botonOb.visible = true;
            ataque1.visible =false;
            ataque2.visible = false;
            ataque3.visible = false;
            backBotonAt3.visible = false;
            backBoton1.visible = true;
            backBoton2.visible = false;
        })
        .on('pointerover', () => ataque3.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque3.setStyle({ fill: '#7D8E69' }));
        ataque3.visible = false;

        function loadFont(name, url) {
            var newFont = new FontFace(name, `url(${url})`);
            newFont.load().then(function (loaded) {
                document.fonts.add(loaded);
            }).catch(function (error) {
                return error;
            });
        }



        loadFont("asian", "public/assets/fuentes/OPTIAsian.otf");



        //-----------     UI JUGADOR 2     ------------// 

        this.backBoton = this.add.image(1100, 541, 'B');
        
        this.botonAtV = this.add.text(1035, 520, 'ATAQUES')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAtV.visible = false;
            this.botonObjV.visible = false;
            ataque1V.visible = true;
            ataque2V.visible = true;
            ataque3V.visible = true;
            backBotonAt3V.visible = false;
            backBotonEstV.visible = false;
            backBotonEstV2.visible = true;

        })
        .on('pointerover', () => this.botonAtV.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => this.botonAtV.setStyle({ fill: '#7D8E69' }));

        this.add.image(1100, 620, 'B')
        //let botonEstatV2 = this.add.image(405, 542, 'B')
        //botonEstatV2.visible = false;

        this.botonObjV = this.add.text(1038, 600, 'OBJETOS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()



        let backBotonEstV = this.add.image(875, 580, 'B')
        .setScale(1, 2+0.08);
        let backBotonEstV2 = this.add.image(875, 541, 'B')
        backBotonEstV2.visible = false;

        this.botonEstV = this.add.text(785, 520, 'ESTADISTICAS')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()


        let ataque1V = this.add.text(1035, 520, 'GOLPE')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAtV.visible = true;
            this.botonObjV.visible = true;
            ataque1V.visible = false;
            ataque2V.visible = false;
            ataque3V.visible = false;
            backBotonAt3V.visible = false;
            backBotonEstV.visible = true;
            backBotonEstV2.visible = false;
            this.golpe(peonV, 'peonVA1')
            this.restarVida(peonS, peonV)
            this.die(peonS, peonV)
            peonV.setTint(0xFF0000)
            this.daño(peonS)
            //peonS.play({key: 'peonSA1', repeat: 0});
            //this.setValue(healthBar, 10)
            //this.recibirDaño(healthBar, 20)
            /*if ((parseInt(peonV.getData('lifePeonV')) - this.restarVidas) >= 0) {
                peonV.setData('lifePeonV', peonV.getData('lifePeonV') - this.restarVidas);
                peonV.setTint(0xFF0000)
                this.daño(peonV)
                console.log(peonV.getData('lifePeonV'))
            }
            this.registry.events.emit('lifePeonV', this.image.getData('lifePeonV'));*/
        })
        .on('pointerover', () => ataque1V.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque1V.setStyle({ fill: '#7D8E69' }));
        ataque1V.visible = false;


        let ataque2V = this.add.text(785, 600, 'ENFADO')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAtV.visible = true;
            this.botonObjV.visible = true;
            ataque1V.visible = false;
            ataque2V.visible = false;
            ataque3V.visible = false;
            backBotonAt3V.visible = false;
            backBotonEstV.visible = true;
            backBotonEstV2.visible = false;
            /*this.ataque1(peonS, 'peonSA1')
            this.restarVida(peonS, peonV)
            this.die(peonV)
            peonV.setTint(0xFF0000)
            this.daño(peonV)*/
            //peonS.play({key: 'peonSA1', repeat: 0});
            //this.setValue(healthBar, 10)
            //this.recibirDaño(healthBar, 20)
            /*if ((parseInt(peonV.getData('lifePeonV')) - this.restarVidas) >= 0) {
                peonV.setData('lifePeonV', peonV.getData('lifePeonV') - this.restarVidas);
                peonV.setTint(0xFF0000)
                this.daño(peonV)
                console.log(peonV.getData('lifePeonV'))
            }
            this.registry.events.emit('lifePeonV', this.image.getData('lifePeonV'));*/
        })
        .on('pointerover', () => ataque2V.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque2V.setStyle({ fill: '#7D8E69' }));
        ataque2V.visible = false;



        
        let backBotonAt3V = this.add.image(875, 620, 'B')
        backBotonAt3V.visible = false;
        
        let ataque3V = this.add.text(1035, 600, 'CURAR')
        .setStyle({
            fontFamily: "asian",
            fontSize: '50px',
            fill: '#7D8E69'
        })
        .setInteractive()
        .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN,() => {
            //this.backBoton.visible = false;
            this.botonAtV.visible = true;
            this.botonObjV.visible = true;
            ataque1V.visible = false;
            ataque2V.visible = false;
            ataque3V.visible = false;
            backBotonAt3V.visible = false;
            backBotonEstV.visible = true;
            backBotonEstV2.visible = false;
            /*this.ataque1(peonS, 'peonSA1')
            this.restarVida(peonS, peonV)
            this.die(peonV)
            peonV.setTint(0xFF0000)
            this.daño(peonV)*/
            //peonS.play({key: 'peonSA1', repeat: 0});
            //this.setValue(healthBar, 10)
            //this.recibirDaño(healthBar, 20)
            /*if ((parseInt(peonV.getData('lifePeonV')) - this.restarVidas) >= 0) {
                peonV.setData('lifePeonV', peonV.getData('lifePeonV') - this.restarVidas);
                peonV.setTint(0xFF0000)
                this.daño(peonV)
                console.log(peonV.getData('lifePeonV'))
            }
            this.registry.events.emit('lifePeonV', this.image.getData('lifePeonV'));*/
        })
        .on('pointerover', () => ataque3V.setStyle({ fill: '#323D26' }))
        .on('pointerout', () => ataque3V.setStyle({ fill: '#7D8E69' }));
        ataque3V.visible = false;
        
        
        /*var Personajes = new Phaser.Class({

            Extends: Phaser.GameObjects.Image,
        
            initialize:
        
            function EnemyRobot (scene, x, y)
            {
                Phaser.GameObjects.Image.call(this, scene);
        
                this.setTexture('peonS');
                this.setPosition(x, y);
                this.setScale(2);
            }
        
        });*/

        /*crearP(x, y, daño, vida,texture ){
            let texture = new Personajes(
                this,
                x,
                y,
                "texture",
                0.14,
                20,
                100,
                "red"
                );
        }*/

        // personajes samurais
        let peonS = new Personajes(
            this,
            630,
            300,
            "peonS",
            0.17,
            20,
            100
            );
        /*let caballoS = new Personajes(
            this,
            450,
            270,
            "caballoS",
            0.15
            );
        let reynaS = new Personajes(
            this,
            600,
            300,
            "reynaS",
            0.2
            );*/

        // personajes vikingos
        let peonV = new Personajes(
            this,
            670,
            295,
            "peonV",
            0.14,
            20,
            100,
            "red"
            );
        /*let caballoV = new Personajes(
            this,
            450,
            270,
            "caballoV",
            0.15
            );
        let reynaV = new Personajes(
            this,
            670,
            300,
            "reynaV",
            0.16
            );*/

        //var peonS = new Personajes(this, 500, 500, 20, 50, 50, 'peonV');
        //this.children.add(new Personajes(this, 500, 500));

        console.log(peonV.vidaPersonaje)


        /*perS01.data.set('name', 'peonS');

        console.log(perS01.data.get('name'))*/
        

     //Animaciones samurais
     const peonSA1 = this.anims.create({
        key: "peonSA1",
        frames: this.anims.generateFrameNumbers('peonS', {start: 0, end: 7}),
        frameRate: 10
     })
     //const peonS = this.add.sprite(210, 310, 'peonS').setScale(.2)
     
     const reynaSA1 = this.anims.create({
        key: "reynaSA1",
        frames: this.anims.generateFrameNumbers('reynaS', {start: 0, end: 6}),
        frameRate: 10
     })
     //const reynaS = this.add.sprite(580, 290, 'reynaS').setScale(.2)
     
     const caballoSA1 = this.anims.create({
        key: "caballoSA1",
        frames: this.anims.generateFrameNumbers('caballoS', {start: 0, end: 6}),
        frameRate: 10
     })
     //const caballoS = this.add.sprite(310, 245, 'caballoS').setScale(.2)
     //const peonSA1 = this.anims.create()
     
     
     //Animaciones vikingos
     const peonVA1 = this.anims.create({
        key: "peonVA1",
        frames: this.anims.generateFrameNumbers('peonV', {start: 0, end: 5}),
        frameRate: 10
     })
     //const peonV = this.add.sprite(800, 270, 'peonV').setScale(.2)
     //.setData('lifePeonV', 150);
     //console.log(peonV.getData('lifePeonV'))

     const reynaVA1 = this.anims.create({
        key: "reynaVA1",
        frames: this.anims.generateFrameNumbers('reynaV', {start: 0, end: 4}),
        frameRate: 10
     })
     //const reynaV = this.add.sprite(650, 290, 'reynaV').setScale(.2)




     
    }

    update(){
        //this.barJ1.clear();

        

    }

    //Funciones
    
    daño(pers){
        pers.setTint(0xFF0000)
        this.scheduleClearTint(pers)
        
        
    }
    scheduleClearTint(pers) {
        pers.scene.time.addEvent({ delay: 300, callback: pers.clearTint, callbackScope: pers });
    };


    golpe(pers, frames){
        pers.play({key: frames, repeat: 0});
    };

    restarVida(per1, per2){
        per2.vidaPersonaje -= per1.dañoPersonaje;
        console.log(per2.vidaPersonaje)
    }

    die(per1, per2){
        if (per1.vidaPersonaje <= 0){
            this.scene.start("VictoriaS"), {ganadorEt: "peonV" }
            console.log("listo")
        } else if (per2.vidaPersonaje <= 0){
            this.scene.start("VictoriaV"), {ganadorEt: "peonS" }
        }
    }

    /*ganadorEtapa(pers1, pers2) {
        if(pers1.vidaPersonaje === 0) {
            this.scene.start("VictoriaV"), {ganadorEt: "peonV" }
        } else {
            this.scene.start("VictoriaS"), {ganadorEt: "peonS"}
        }
    }*/

    /*recibirDaño(per){
        per.setTint(color)
    }*/

    /*stop(){
        pers.stop()
    }*/

    

}