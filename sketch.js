// creating variables

var gameState = 0;
var score = 0;
var life1, portal1, portal2, portal3, portal4, portal5, portal6, ghostHouse1, welcome;
var ghostHouse2, ghostHouse3, ghostHouse4, life2, life3, ghostHouse5;
var ghostHouseBlock, wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall13;
var wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24;
var wall25, wall26, wall27, wall30, wall31, wall32, wall8, wall9, wall10, wall11;
var wall12, wall28, wall29, cherry, gameOver, macman, ghost1, ghost2;
var ghost3, ghost4, wall1I, wall2I, wall3I, wall4I, wall5I, wall6I, wall7I, wall8I;
var wall9I, wall10I, wall11I, wall12I, cherryI, gameOverI, coinI, macmanClosedI;
var macmanRightA, macmanLeftA, macmanUpA, macmanDownA, livesI, ghost1I, ghost2I;
var ghost3I, ghost4I, fakeBlueGhostI, edges, blocker, bigCoin1, bigCoin2, bigCoin3;
var bigCoin4, bigCoin5;
var restartBt;
var touch1 = 0;
var touched = 0;
var touch2 = 0;
var touch3 = 0;
var touch4 = 0;
var touch5 = 0;
var count2 = 5;
var count3 = 10;
var count = 200;
var wall14, g2tno;
var coins = [];
var counter = setInterval(timer, 1000);
var counter2 = setInterval(timer2, 1000);
var counter3 = setInterval(timer3, 1000);
var g3b = 0;
var g4b;
var a = 0;
var b = 0;
var c = 0;
var ababav = 0;
var life = 3;

// load your images, animation and sounds here

function preload() {
    back = loadImage("./IMAGES/bg2.jpg");

    wall1I = loadImage("./IMAGES/Wall/Wall.png");
    wall2I = loadImage("./IMAGES/Wall/Wall2.png");
    wall3I = loadImage("./IMAGES/Wall/Wall3.png");
    wall4I = loadImage("./IMAGES/Wall/Wall4.png");
    wall5I = loadImage("./IMAGES/Wall/Wall5.png");
    wall6I = loadImage("./IMAGES/Wall/Wall6.png");
    wall7I = loadImage("./IMAGES/Wall/Wall7.png");
    wall8I = loadImage("./IMAGES/Wall/Wall8.png");
    wall9I = loadImage("./IMAGES/Wall/Wall9.png");
    wall10I = loadImage("./IMAGES/Wall/Wall10.png");
    wall11I = loadImage("./IMAGES/Wall/Wall11.png");
    wall12I = loadImage("./IMAGES/Wall/Block.png");

    cherryI = loadImage("./IMAGES/Cherry.png");
    gameOverI = loadImage("./IMAGES/GameOver.png");
    youwonI = loadImage("./IMAGES/Winner.png");
    coinI = loadImage("./IMAGES/Coin.png");

    macmanClosedI = loadImage("./IMAGES/Macman/Close.png");
    macmanRightA = loadImage("./IMAGES/Macman/Right2.png");
    macmanLeftA = loadImage("./IMAGES/Macman/MacmanLeft2.png");
    macmanUpA = loadImage("./IMAGES/Macman/MacmanUp2.png");
    macmanDownA = loadImage("./IMAGES/Macman/MacmanDown2.png");

    ghost1I = loadImage("./IMAGES/Ghost/GhostRed.png");
    ghost2I = loadImage("./IMAGES/Ghost/GhostOrange.png");
    ghost3I = loadImage("./IMAGES/Ghost/GhostYellow.png");
    ghost4I = loadImage("./IMAGES/Ghost/GhostBlue.png");
    fakeBlueGhostI = loadImage("./IMAGES/Ghost/FakeBlueGhost.png");

    lifeI = loadImage("./IMAGES/Life.png");

    music = loadSound("./SOUNDS/macman game music.mp3");
}

// we can setup the game from here

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);

    // making portal1

    portal1 = createSprite(200, 450, 2, 20);
    portal1.visible = false;

    // making portal2

    portal2 = createSprite(windowWidth - 350, 450, 2, 20);
    portal2.visible = false;

    // making portal3

    portal3 = createSprite(150, 180, 2, 20);
    portal3.visible = false;

    // making portal4

    portal4 = createSprite(windowWidth - 150, 180, 2, 20);
    portal4.visible = false;

    // making portal5

    portal5 = createSprite(150, windowHeight - 76, 2, 20);
    portal5.visible = false;

    // making portal6

    portal6 = createSprite(windowWidth - 150, windowHeight - 76, 2, 20);
    portal6.visible = false;

    // making ghostHouse1

    ghostHouse1 = createSprite(700, 427);
    ghostHouse1.addImage(wall4I);
    ghostHouse1.scale = 1.9;

    // making ghostHouse2

    ghostHouse2 = createSprite(667, 380);
    ghostHouse2.addImage(wall5I);
    ghostHouse2.scale = 1.9;

    // making ghostHouse3

    ghostHouse3 = createSprite(733, 380);
    ghostHouse3.addImage(wall6I);
    ghostHouse3.scale = 1.9;

    // making ghostHouse4

    ghostHouse4 = createSprite(650, 400);
    ghostHouse4.addImage(wall7I);
    ghostHouse4.scale = 1.9;

    // making ghostHouse5

    ghostHouse5 = createSprite(752, 400);
    ghostHouse5.addImage(wall7I);
    ghostHouse5.scale = 1.9;

    // making ghostHouseBlock

    ghostHouseBlock = createSprite(700, 383);
    ghostHouseBlock.addImage(wall12I);
    ghostHouseBlock.scale = 1.9;

    // making wall1

    wall1 = createSprite(700, 497);
    wall1.addImage(wall1I);
    wall1.scale = 2;

    // making wall2

    wall2 = createSprite(702, 545);
    wall2.addImage(wall2I);
    wall2.scale = 2;

    // making wall3

    wall3 = createSprite(700, 700);
    wall3.addImage(wall3I);
    wall3.scale = 2;

    // making wall4

    wall4 = createSprite(700, 650);
    wall4.addImage(wall3I);
    wall4.scale = 2;

    // making wall5

    wall5 = createSprite(560, 575);
    wall5.addImage(wall8I);
    wall5.scale = 2;

    // making wall6

    wall6 = createSprite(840, 575);
    wall6.addImage(wall8I);
    wall6.scale = 2;

    // making wall7

    wall7 = createSprite(600, 455);
    wall7.addImage(wall8I);
    wall7.scale = 2;

    // making wall8

    wall8 = createSprite(800, 455);
    wall8.addImage(wall8I);
    wall8.scale = 2;

    // making wall9

    wall9 = createSprite(450, 500);
    wall9.addImage(wall3I);
    wall9.scale = 2;

    // making wall10

    wall10 = createSprite(940, 500);
    wall10.addImage(wall3I);
    wall10.scale = 2;

    // making wall11

    wall11 = createSprite(460, 620);
    wall11.addImage(wall3I);
    wall11.scale = 2;

    // making wall12

    wall12 = createSprite(940, 620);
    wall12.addImage(wall3I);
    wall12.scale = 2;

    // making wall13

    wall13 = createSprite(461.5, 620);
    wall13.addImage(wall8I);
    wall13.scale = 2;

    // making wall14

    wall14 = createSprite(941.5, 620);
    wall14.addImage(wall8I);
    wall14.scale = 2;

    // making wall15

    wall15 = createSprite(700, 300);
    wall15.addImage(wall9I);
    wall15.scale = 2;

    // making wall16

    wall16 = createSprite(700, 250);
    wall16.addImage(wall10I);
    wall16.scale = 2;

    // making wall17

    wall17 = createSprite(700, 150);
    wall17.addImage(wall3I);
    wall17.scale = 2;

    // making wall18

    wall18 = createSprite(700, 100);
    wall18.addImage(wall3I);
    wall18.scale = 2;

    // making wall19

    wall19 = createSprite(450, 225);
    wall19.addImage(wall8I);
    wall19.scale = 2;

    // making wall20

    wall20 = createSprite(975, 225);
    wall20.addImage(wall8I);
    wall20.scale = 2;

    // making wall21

    wall21 = createSprite(525, 345);
    wall21.addImage(wall8I);
    wall21.scale = 2;

    // making wall22

    wall22 = createSprite(875, 345);
    wall22.addImage(wall8I);
    wall22.scale = 2;

    // making wall23

    wall23 = createSprite(360, 365);
    wall23.addImage(wall3I);
    wall23.scale = 2;

    // making wall24

    wall24 = createSprite(1040, 365);
    wall24.addImage(wall3I);
    wall24.scale = 2;

    // making wall25

    wall25 = createSprite(260, 305);
    wall25.addImage(wall3I);
    wall25.scale = 2;

    // making wall26

    wall26 = createSprite(1140, 305);
    wall26.addImage(wall3I);
    wall26.scale = 2;

    // making wall27

    wall27 = createSprite(561.5, 200);
    wall27.addImage(wall8I);
    wall27.scale = 2;

    // making wall28

    wall28 = createSprite(841.5, 200);
    wall28.addImage(wall8I);
    wall28.scale = 2;

    // making wall29

    wall29 = createSprite(220, 470);
    wall29.addImage(wall11I);
    wall29.scale = 2;

    // making wall30

    wall30 = createSprite(220, 420);
    wall30.addImage(wall11I);
    wall30.scale = 2;

    // making wall31

    wall31 = createSprite(1185, 420);
    wall31.addImage(wall11I);
    wall31.scale = 2;

    // making wall32

    wall32 = createSprite(1185, 470);
    wall32.addImage(wall11I);
    wall32.scale = 2;

    // making wall33

    wall33 = createSprite(150, 200);
    wall33.addImage(wall11I);
    wall33.scale = 2;

    // making wall34

    wall34 = createSprite(150, 150);
    wall34.addImage(wall11I);
    wall34.scale = 2;

    // making wall35

    wall35 = createSprite(150, windowHeight - 100);
    wall35.addImage(wall11I);
    wall35.scale = 2;

    // making wall36

    wall36 = createSprite(150, windowHeight - 50);
    wall36.addImage(wall11I);
    wall36.scale = 2;

    // making wall37

    wall37 = createSprite(windowWidth - 150, 200);
    wall37.addImage(wall11I);
    wall37.scale = 2;

    // making wall38

    wall38 = createSprite(windowWidth - 150, 150);
    wall38.addImage(wall11I);
    wall38.scale = 2;

    // making wall39

    wall39 = createSprite(windowWidth - 150, windowHeight - 100);
    wall39.addImage(wall11I);
    wall39.scale = 2;

    // making wall40

    wall40 = createSprite(windowWidth - 150, windowHeight - 50);
    wall40.addImage(wall11I);
    wall40.scale = 2;

    // making bigCoin1

    bigCoin1 = createSprite(windowWidth / 2 - 67, 125);
    bigCoin1.addImage(coinI);
    bigCoin1.scale = 0.04;

    // making bigCoin2

    bigCoin2 = createSprite(windowWidth / 6, 449);
    bigCoin2.addImage(coinI);
    bigCoin2.scale = 0.04;

    // making bigCoin3

    bigCoin3 = createSprite(windowWidth / 1.3 - 30, 449);
    bigCoin3.addImage(coinI);
    bigCoin3.scale = 0.04;

    // making bigCoin4

    bigCoin4 = createSprite(windowWidth / 2 - 65, 480);
    bigCoin4.addImage(coinI);
    bigCoin4.scale = 0.04;

    // making bigCoin5

    bigCoin5 = createSprite(windowWidth / 2 - 65, 360);
    bigCoin5.addImage(coinI);
    bigCoin5.scale = 0.04;

    // making macman

    macman = createSprite(700, 680);
    macman.addImage(macmanClosedI);
    macman.scale = 0.040;
    macman.setCollider("circle", 0, 0, 300);

    // making ghost1

    ghost1 = createSprite(670, 360);
    ghost1.addImage(ghost1I);
    ghost1.scale = 0.06;

    // making ghost2

    ghost2 = createSprite(670, 410);
    ghost2.addImage(ghost2I);
    ghost2.scale = 0.06;

    // making ghost3

    ghost3 = createSprite(700, 410);
    ghost3.addImage(ghost3I);
    ghost3.scale = 0.06;

    // making ghost4

    ghost4 = createSprite(730, 410);
    ghost4.addImage(ghost4I);
    ghost4.scale = 0.06;

    // making ghost5

    ghost5 = createSprite(730, 360);
    ghost5.addImage(ghost1I);
    ghost5.scale = 0.06;

    // making ghost7

    ghost7 = createSprite(700, 360);
    ghost7.addImage(ghost3I);
    ghost7.scale = 0.06;

    // making blocker

    blocker = createSprite(windowWidth / 2, 100, windowWidth, 20);
    blocker.shapeColor = "black";
    blocker.visible = false;

    // making cherry

    cherry = createSprite(windowWidth / 2 - 70, 460);
    cherry.addImage(cherryI);
    cherry.scale = 0.2 - 0.05;
    cherry.visible = false;

    // making game over

    gameOver = createSprite(windowWidth / 2 - 40, 420);
    gameOver.addImage(gameOverI);
    gameOver.scale = 3;
    gameOver.visible = false;

    // making you won

    youWon = createSprite(windowWidth / 2 - 70, 400);
    youWon.addImage(youwonI);
    youWon.scale = 0.9;
    youWon.visible = false;

    // making heart1

    heart1 = createSprite(1180, 35);
    heart1.addImage(lifeI);
    heart1.scale = 0.3;

    // making heart2

    heart2 = createSprite(1240, 35);
    heart2.addImage(lifeI);
    heart2.scale = 0.3;

    // making heart3

    heart3 = createSprite(1300, 35);
    heart3.addImage(lifeI);
    heart3.scale = 0.3;

    // making welcome

    welcome = new Welcome();

    // making start

    start = new Start();

    // playing background music in loop 

    music.loop();

    // calling coin function

    Coin();
}

// function draw

function draw() {

    // setting macman velocityY

    macman.velocityY = 0;

    // setting macman velocityX

    macman.velocityX = 0;

    // if touch1 == 1 && macman.isTouching ghost1

    if (touch1 == 1 && macman.isTouching(ghost1)) {
        ghost1.destroy();
    }

    // if touch1 == 1 && macman.isTouching ghost2

    if (touch1 == 1 && macman.isTouching(ghost2)) {
        ghost2.destroy();
    }

    // if touch1 == 1 && macman.isTouching ghost3

    if (touch1 == 1 && macman.isTouching(ghost3)) {
        ghost3.destroy();
    }

    // if touch1 == 1 && macman.isTouching ghost4

    if (touch1 == 1 && macman.isTouching(ghost4)) {
        ghost4.destroy();
    }

    // if touch1 == 1 && macman.isTouching ghost5

    if (touch1 == 1 && macman.isTouching(ghost5)) {
        ghost5.destroy();
    }

    // if touch1 == 1 && macman.isTouching ghost7

    if (touch1 == 1 && macman.isTouching(ghost7)) {
        ghost7.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost1

    if (touch2 == 1 && macman.isTouching(ghost1)) {
        ghost1.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost2

    if (touch2 == 1 && macman.isTouching(ghost2)) {
        ghost2.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost3

    if (touch2 == 1 && macman.isTouching(ghost3)) {
        ghost3.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost4

    if (touch2 == 1 && macman.isTouching(ghost4)) {
        ghost4.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost5

    if (touch2 == 1 && macman.isTouching(ghost5)) {
        ghost5.destroy();
    }

    // if touch2 == 1 && macman.isTouching ghost7

    if (touch2 == 1 && macman.isTouching(ghost7)) {
        ghost7.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost1

    if (touch3 == 1 && macman.isTouching(ghost1)) {
        ghost1.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost2

    if (touch3 == 1 && macman.isTouching(ghost2)) {
        ghost2.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost3

    if (touch3 == 1 && macman.isTouching(ghost3)) {
        ghost3.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost4

    if (touch3 == 1 && macman.isTouching(ghost4)) {
        ghost4.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost5

    if (touch3 == 1 && macman.isTouching(ghost5)) {
        ghost5.destroy();
    }

    // if touch3 == 1 && macman.isTouching ghost7

    if (touch3 == 1 && macman.isTouching(ghost7)) {
        ghost7.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost1

    if (touch4 == 1 && macman.isTouching(ghost1)) {
        ghost1.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost2

    if (touch4 == 1 && macman.isTouching(ghost2)) {
        ghost2.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost3

    if (touch4 == 1 && macman.isTouching(ghost3)) {
        ghost3.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost4

    if (touch4 == 1 && macman.isTouching(ghost4)) {
        ghost4.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost5

    if (touch4 == 1 && macman.isTouching(ghost5)) {
        ghost5.destroy();
    }

    // if touch4 == 1 && macman.isTouching ghost7

    if (touch4 == 1 && macman.isTouching(ghost7)) {
        ghost7.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost1

    if (touch5 == 1 && macman.isTouching(ghost1)) {
        ghost1.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost2

    if (touch5 == 1 && macman.isTouching(ghost2)) {
        ghost2.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost3

    if (touch5 == 1 && macman.isTouching(ghost3)) {
        ghost3.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost4

    if (touch5 == 1 && macman.isTouching(ghost4)) {
        ghost4.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost5

    if (touch5 == 1 && macman.isTouching(ghost5)) {
        ghost5.destroy();
    }

    // if touch5 == 1 && macman.isTouching ghost7

    if (touch5 == 1 && macman.isTouching(ghost7)) {
        ghost7.destroy();
    }

    // if life === 3

    if (life === 3) {

        // so that all the hearts are visible when life === 3

        heart3.visible = true;
        heart2.visible = true;
        heart1.visible = true;

        // if ghost1 touches macman

        if (ghost1.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost2 touches macman

        if (ghost2.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost3 touches macman

        if (ghost3.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost4 touches macman

        if (ghost4.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost5 touches macman

        if (ghost5.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost7 touches macman

        if (ghost7.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
    }

    // if life === 2

    if (life === 2) {

        // so that player can't see heart 3 when life === 2 

        heart3.visible = false;

        // if ghost1 touches macman

        if (ghost1.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost2 touches macman

        if (ghost2.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost3 touches macman

        if (ghost3.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost4 touches macman

        if (ghost4.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost5 touches macman

        if (ghost5.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost7 touches macman

        if (ghost7.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
    }

    // life === 1

    if (life === 1) {

        // so that player can't see heart 2 when life === 2

        heart2.visible = false;

        // if ghost1 touches macman

        if (ghost1.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost2 touches macman

        if (ghost2.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost3 touches macman

        if (ghost3.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost4 touches macman

        if (ghost4.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost5 touches macman

        if (ghost5.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
        // if ghost7 touches macman

        if (ghost7.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }
    }

    // gameState === 0

    if (gameState === 0) {
        background(back);
        welcome.display();
    }

    // if score === 0

    if (score === 598) {

        // destroying ghost1

        ghost1.destroy();

        // destroying ghost2

        ghost2.destroy();

        // destroying ghost3

        ghost3.destroy();

        // destroying ghost4

        ghost4.destroy();

        // destroying ghost5

        ghost5.destroy();

        // destroying ghost7

        ghost7.destroy();

        // destroying macman

        macman.destroy();

        // so that you won image is visible 

        youWon.visible = true;
    }

    // if gameState === "start"

    if (gameState === "start") {

        // setting velocities of all the ghost in the begining of the game

        ghost1.velocityY = -15;
        ghost2.velocityX = 15;
        ghost3.velocityY = -15;
        ghost4.velocityX = -15;
        ghost5.velocityY = -15;
        ghost7.velocityY = -15;

        // setting background color 

        background("black");

        // so that sprites are visible

        drawSprites();

        // setting color to text

        fill("black");

        // setting stroke to text

        stroke("red");

        // setting strokeWeight to text

        strokeWeight(5);

        // setting textSize to text

        textSize(50);

        // writting the score text 

        text("SCORE = " + score, 200, 50);

        // writting the lives text 

        text("LIVES = ", 950, 50);

        // creating EdgeSprites

        edges = createEdgeSprites();

        // so that macman should collide with all the edges

        macman.collide(edges);

        // so that macman should collide with all the walls

        macman.collide(wall1);
        macman.collide(wall2);
        macman.collide(wall3);
        macman.collide(wall4);
        macman.collide(wall5);
        macman.collide(wall6);
        macman.collide(wall7);
        macman.collide(wall8);
        macman.collide(wall9);
        macman.collide(wall10);
        macman.collide(wall11);
        macman.collide(wall12);
        macman.collide(wall13);
        macman.collide(wall14);
        macman.collide(wall15);
        macman.collide(wall16);
        macman.collide(wall17);
        macman.collide(wall18);
        macman.collide(wall19);
        macman.collide(wall20);
        macman.collide(wall21);
        macman.collide(wall22);
        macman.collide(wall23);
        macman.collide(wall24);
        macman.collide(wall25);
        macman.collide(wall26);
        macman.collide(wall27);
        macman.collide(wall28);
        macman.collide(wall29);
        macman.collide(wall30);
        macman.collide(wall31);
        macman.collide(wall32);
        macman.collide(wall33);
        macman.collide(wall34);
        macman.collide(wall35);
        macman.collide(wall36);
        macman.collide(wall37);
        macman.collide(wall38);
        macman.collide(wall39);
        macman.collide(wall40);

        // so that macman should collide with all the ghostHouses

        macman.collide(ghostHouse1);
        macman.collide(ghostHouse2);
        macman.collide(ghostHouse3);
        macman.collide(ghostHouse4);
        macman.collide(ghostHouse5);

        // if ghost1.y < 330

        if (ghost1.y < 330) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityX = -15;
        }

        // if ghost1.x < 550

        if (ghost1.x < 550) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityY = -15;
        }

        // if ghost1.y < 130

        if (ghost1.y < 130) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityX = -15;
        }

        // if ghost1.x < 50

        if (ghost1.x < 50) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityY = 15;
        }

        // if ghost1.y > windowHeight / 2 + 35

        if (ghost1.y > windowHeight / 2 + 35) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityX = 15;
        }

        // if ghost1.x > 550 && ghost1.y > windowHeight / 2 + 35

        if (ghost1.x > 550 && ghost1.y > windowHeight / 2 + 35) {
            ghost1.velocityY = 0;
            ghost1.velocityX = 0;
            ghost1.velocityY = -15;
        }

        // if ghost2.x > 690

        if (ghost2.x > 690) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityY = -15;
        }

        // if ghost2.y < 330

        if (ghost2.y < 330) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityX = -15;
        }

        // if ghost2.x < 550

        if (ghost2.x < 550) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityY = 15;
        }

        // if ghost2.y > windowHeight - 40

        if (ghost2.y > windowHeight - 40) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityX = -15;
        }

        // if ghost2.x < 50

        if (ghost2.x < 50) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityY = -15;
        }

        // if ghost2.y < 280

        if (ghost2.y < 280) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityX = 15;
        }

        // if ghost2.x > 540 && ghost2.y < 280

        if (ghost2.x > 540 && ghost2.y < 280) {
            ghost2.velocityY = 0;
            ghost2.velocityX = 0;
            ghost2.velocityY = 15;
        }

        // if ghost3.y < 330

        if (ghost3.y < 330) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 0;
            ghost3.velocityX = -15;
        }

        // if ghost3.x < 590

        if (ghost3.x < 590) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 0;
            ghost3.velocityY = 15;
        }

        // if ghost3.y > windowHeight - 120

        if (ghost3.y > windowHeight - 120) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 0;
            ghost3.velocityX = 15;
        }

        // if ghost3.x > 810 && ghost3.y > 350

        if (ghost3.x > 810 && ghost3.y > 350) {
            ghost3.velocityY = 0;
            ghost3.velocityX = 0;
            ghost3.velocityY = -15;
        }

        // if ghost4.x < 710

        if (ghost4.x < 710) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityY = -15;
        }

        // ghost4.y < 330

        if (ghost4.y < 330) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityX = 15;
        }

        // if ghost4.x > 850

        if (ghost4.x > 850) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityY = 15;
        }

        // if ghost4.y > windowHeight - 40

        if (ghost4.y > windowHeight - 40) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityX = 15;
        }

        // if ghost4.x > windowWidth - 30

        if (ghost4.x > windowWidth - 30) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityY = -15;
        }

        // if ghost4.y < 130

        if (ghost4.y < 130) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityX = -15;
        }

        // if ghost4.x < 330 && ghost4.y < 130

        if (ghost4.x < 330 && ghost4.y < 130) {
            ghost4.velocityY = 0;
            ghost4.velocityX = 0;
            ghost4.velocityY = 15;
        }

        // if ghost5.y < 330

        if (ghost5.y < 330) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityX = 15;
        }

        // if ghost5.x > windowWidth - 680

        if (ghost5.x > windowWidth - 680) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityY = -15;
        }

        // if ghost5.y < 130

        if (ghost5.y < 130) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityX = 15;
        }

        // if ghost5.x > windowWidth - 20

        if (ghost5.x > windowWidth - 20) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityY = 15;
        }

        // if ghost5.y > windowHeight / 2 + 35

        if (ghost5.y > windowHeight / 2 + 35) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityX = -15;
        }

        // if ghost5.x < windowWidth - 680 && ghost5.y > windowHeight / 2 - 35

        if (ghost5.x < windowWidth - 680 && ghost5.y > windowHeight / 2 - 35) {
            ghost5.velocityY = 0;
            ghost5.velocityX = 0;
            ghost5.velocityY = -15;
        }

        // if ghost7.y < 330

        if (ghost7.y < 330) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityX = -15;
        }

        // if ghost7.x < 550

        if (ghost7.x < 550) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityY = -15;
        }

        // if ghost7.y < 130

        if (ghost7.y < 130) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityX = 15;
        }

        // if ghost7.x > windowWidth - 680

        if (ghost7.x > windowWidth - 680) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityY = 15;
        }

        // if ghost7.y > windowHeight / 2

        if (ghost7.y > windowHeight / 2) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityX = -15;
        }

        // if ghost7.x < windowWidth - 680 && ghost7.y > windowHeight / 2

        if (ghost7.x < windowWidth - 680 && ghost7.y > windowHeight / 2) {
            ghost7.velocityY = 0;
            ghost7.velocityX = 0;
            ghost7.velocityY = -15;
        }

        // so that macman should collide with the blocker

        macman.collide(blocker);

        // giving different velocities to all the ghosts according to the map

        // if macman touches portal1

        if (macman.isTouching(portal1)) {
            macman.x = windowWidth - 400;
            macman.velocityX = -3;
            macman.velocityY = 0;
        }

        // if ghost1 touches macman

        if (ghost1.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost2 touches macman

        if (ghost2.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost3 touches macman

        if (ghost3.isTouching(macman)) {
            life = life - 1;


            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost4 touches macman

        if (ghost4.isTouching(macman)) {
            life = life - 1;


            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost5 touches macman

        if (ghost5.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if ghost7 touches macman

        if (ghost7.isTouching(macman)) {
            life = life - 1;

            reset();

            a = 0;
            b = 0;
            c = 1;
        }

        // if c == 1

        if (c == 1) {
            fill("White");
            noStroke();
            text("👎", windowWidth / 2 - 70, 50);
        }

        // if macman touches cherry && life == 0

        if (macman.isTouching(cherry) && life == 0) {
            life = 3;
            cherry.destroy();

            fill("White");
            noStroke();
            text("👍👍", windowWidth / 2 - 70, 50);
        }

        // if macman touches cherry && life == 1

        if (macman.isTouching(cherry) && life == 1) {
            life = 3;
            cherry.destroy();

            fill("White")
            noStroke();
            text("👍👍", windowWidth / 2 - 70, 50);
        }

        // if macman touches cherry && life == 2

        if (macman.isTouching(cherry) && life == 2) {
            life = 3;
            cherry.destroy();

            fill("White")
            noStroke();
            text("👍👍", windowWidth / 2 - 70, 50);
        }

        // if macman touches portal1

        if (macman.isTouching(portal1)) {
            macman.x = windowWidth - 400;
        }

        // if macman touches portal2

        if (macman.isTouching(portal2)) {
            macman.x = 250;
        }

        // if macman touches portal3

        if (macman.isTouching(portal3)) {
            macman.x = windowWidth - 180;
        }

        // if macman touches portal4

        if (macman.isTouching(portal4)) {
            macman.x = 160;
        }

        // if macman touches portal5

        if (macman.isTouching(portal5)) {
            macman.x = windowWidth - 180;
        }

        // if macman touches portal6

        if (macman.isTouching(portal6)) {
            macman.x = 160;
        }

        // if macman touches food

        for (var i = 0; i < coins.length; i++) {
            if (macman.isTouching(coins[i])) {
                coins[i].destroy();
                score++;

                a = 1;
                b = 0;
                c = 0;
            }
        }

        // if a == 1

        if (a == 1) {
            fill("White");
            noStroke();
            text("👍", windowWidth / 2 - 70, 50);
        }

        // if macman touches bigCoin1

        if (macman.isTouching(bigCoin1)) {
            count = 200;
            touch1 = 1;
            bigCoin1.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        // if touch1 == 1

        if (touch1 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);
            ghost5.addImage(fakeBlueGhostI);
            ghost7.addImage(fakeBlueGhostI);


            timer();
        }

        // if macman touches bigCoin2

        if (macman.isTouching(bigCoin2)) {
            count = 200;
            touch2 = 1;
            bigCoin2.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        // if touch2 == 1

        if (touch2 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);
            ghost5.addImage(fakeBlueGhostI);
            ghost7.addImage(fakeBlueGhostI);

            timer();
        }

        // if macman touches bigCoin3

        if (macman.isTouching(bigCoin3)) {
            count = 200;
            touch3 = 1;
            bigCoin3.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        // if touche3 == 1

        if (touch3 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);
            ghost5.addImage(fakeBlueGhostI);
            ghost7.addImage(fakeBlueGhostI);

            timer();
        }

        // if macman touches bigCoin4

        if (macman.isTouching(bigCoin4)) {
            count = 200;
            touch4 = 1;
            bigCoin4.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        // if touch4 == 1

        if (touch4 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);
            ghost5.addImage(fakeBlueGhostI);
            ghost7.addImage(fakeBlueGhostI);

            timer();
        }

        // if macman touches bigCoin5

        if (macman.isTouching(bigCoin5)) {
            count = 200;
            touch5 = 1;
            bigCoin5.destroy();
            score += 2;

            a = 0;
            b = 1;
            c = 0;
        }

        // if touch5 == 1

        if (touch5 == 1) {
            ghost1.addImage(fakeBlueGhostI);
            ghost2.addImage(fakeBlueGhostI);
            ghost3.addImage(fakeBlueGhostI);
            ghost4.addImage(fakeBlueGhostI);
            ghost5.addImage(fakeBlueGhostI);
            ghost7.addImage(fakeBlueGhostI);

            timer();
        }

        // if b == 1

        if (b == 1) {
            fill("White")
            noStroke();
            text("👍👍👍👍", windowWidth / 2 - 70, 50);
        }

        // if we touch or if we press up_arrow

        if (touches.length = 0 || keyDown("up")) {
            macman.addImage(macmanUpA);
            macman.velocityX = 0;
            macman.velocityY = -15;
            gameState = "start";
        }

        // if we touch or if we press down_arrow

        if (touches.length = 0 || keyDown("down")) {
            macman.addImage(macmanDownA);
            macman.velocityX = 0;
            macman.velocityY = 15;
            gameState = "start";
        }

        // if we touch or if we press right_arrow

        if (touches.length = 0 || keyDown("right")) {
            macman.addImage(macmanRightA);
            macman.velocityY = 0;
            macman.velocityX = 15;
            gameState = "start";
        }

        // if we touch or if we press left_arrow

        if (touches.length = 0 || keyDown("left")) {
            macman.addImage(macmanLeftA);
            macman.velocityY = 0;
            macman.velocityX = -15;
            gameState = "start";
        }
    }

    // if gameState === "begin"

    if (gameState === "begin") {

        if (life === 0) {

            // setting the value of g3b 

            g3b = 0;

            // setting the value of g4b 

            g4b = 0;

            // setting the value of g2tw 

            g2tw = 0;

            // setting the value of g1tw 

            g1tw = 0;

            // setting the value of count2 

            count2 = 5;

            // setting the value of count3 

            count3 = 10;

            // setting the value of count 

            count = 200;

            // setting the value of touch1 

            touch1 = 0;

            // setting the value of touch2

            touch2 = 0;

            // setting the value of touch3 

            touch3 = 0;

            // setting the value of touch4 

            touch4 = 0;

            // setting the value of touch5 

            touch5 = 0;

            // setting the value of touched

            touched = 0;

            // destroying macman

            macman.destroy();

            // destroying ghost1

            ghost1.destroy();

            // destroying ghost2

            ghost2.destroy();

            // destroying ghost3

            ghost3.destroy();

            // destroying ghost4

            ghost4.destroy();

            // destroying ghost5

            ghost5.destroy();

            // destroying ghost7

            ghost7.destroy();

            // calling gameState end

            gameState = "end";

            // so that player can't see heart1

            heart1.visible = false;

            // so that player can see gameOver image

            gameOver.visible = true;

            // making restartBt button

            restartBt = createButton("RESTART");
            restartBt.position(width / 2.2 - 20, height / 2 + 20);
            restartBt.class("customButton");

            // if we press mouse on restartBt

            restartBt.mousePressed(() => {
                restartBt.hide();
                life = 3;
                score = 0;
                gameOver.visible = false;
                cherry.destroy();
                gameState = "begin";
                Coin();
                gameState = 0;
                // making macman

                macman = createSprite(700, 680);
                macman.addImage(macmanClosedI);
                macman.scale = 0.040;
                macman.setCollider("circle", 0, 0, 300);

                // making ghost1

                ghost1 = createSprite(670, 360);
                ghost1.addImage(ghost1I);
                ghost1.scale = 0.06;

                // making ghost2

                ghost2 = createSprite(670, 410);
                ghost2.addImage(ghost2I);
                ghost2.scale = 0.06;

                // making ghost3

                ghost3 = createSprite(700, 410);
                ghost3.addImage(ghost3I);
                ghost3.scale = 0.06;

                // making ghost4

                ghost4 = createSprite(730, 410);
                ghost4.addImage(ghost4I);
                ghost4.scale = 0.06;

                // making ghost5

                ghost5 = createSprite(730, 360);
                ghost5.addImage(ghost1I);
                ghost5.scale = 0.06;

                // making ghost7

                ghost7 = createSprite(700, 360);
                ghost7.addImage(ghost3I);
                ghost7.scale = 0.06;

                // making welcome

                welcome = new Welcome;

                // making start

                start = new Start;
            });

            // setting the value of a,b and c

            a = 0;
            b = 0;
            c = 0;

            // showing text

            fill("White")
            noStroke();
            text("👎👎", windowWidth / 2, 50);
        }

        // setting background color 

        background("black");

        // so that sprites are visible

        drawSprites();

        // setting color to text

        fill("black");

        // setting stroke to text

        stroke("red");

        // setting strokeWeight to text

        strokeWeight(5);

        // setting textSize to text

        textSize(50);

        // writting the score text 

        text("SCORE = " + score, 200, 50);

        // writting the lives text 

        text("LIVES = ", 950, 50);

        // if we touch or if we press up_arrow

        if (touches.length = 0 || keyDown("up")) {
            macman.addImage(macmanUpA);
            macman.velocityX = 0;
            macman.velocityY = -15;
            gameState = "start";
        }

        // if we touch or if we press down_arrow

        if (touches.length = 0 || keyDown("down")) {
            macman.addImage(macmanDownA);
            macman.velocityX = 0;
            macman.velocityY = 15;
            gameState = "start";
        }

        // if we touch or if we press right_arrow

        if (touches.length = 0 || keyDown("right")) {
            macman.addImage(macmanRightA);
            macman.velocityY = 0;
            macman.velocityX = 15;
            gameState = "start";
        }

        // if we touch or if we press left_arrow

        if (touches.length = 0 || keyDown("left")) {
            macman.addImage(macmanLeftA);
            macman.velocityY = 0;
            macman.velocityX = -15;
            gameState = "start";
        }
    }

    // if gameState === "end"

    if (gameState === "end") {}
}

// making function Coin

function Coin() {
    // creating food for macman

    for (var i = 40; i < windowWidth - 10; i = i + 40) {
        drawCoin(i, 125);
    }
    for (var i = 40; i < 650; i = i + 40) {
        drawCoin(i, windowHeight - 40);
    }
    for (var i = 760; i < windowWidth - 10; i = i + 40) {
        drawCoin(i, windowHeight - 40);
    }
    for (var i = 760; i < windowWidth - 10; i = i + 40) {
        drawCoin(i, windowHeight - 80);
    }
    for (var i = 40; i < windowWidth - 10; i = i + 40) {
        drawCoin(i, windowHeight - 80);
    }
    for (var i = 170; i < windowHeight - 80; i = i + 40) {
        drawCoin(40, i);
    }
    for (var i = 170; i < windowHeight - 80; i = i + 40) {
        drawCoin(80, i);
    }
    for (var i = 170; i < windowHeight - 80; i = i + 40) {
        drawCoin(120, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 15, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 55, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 95, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 135, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 175, i);
    }
    for (var i = 170; i < windowHeight - 95; i = i + 40) {
        drawCoin(windowWidth - 215, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 255, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 295, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 335, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 375, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 415, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 455, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 495, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 535, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 575, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 615, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 655, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 695, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 735, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 775, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 815, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 855, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 895, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 935, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 975, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(windowWidth - 1015, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(160, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(200, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(240, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(280, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(320, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(360, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(400, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(440, i);
    }
    for (var i = windowHeight - 550; i < windowHeight - 100; i = i + 40) {
        drawCoin(480, i);
    }
}

// function drawCoin

function drawCoin(i, y) {

    // creating coin2

    var coin2 = createSprite(i, y);

    // adding image to coin2

    coin2.addImage(coinI);

    // giving scale to coin2

    coin2.scale = 0.02;

    // pushing coin2 from coins

    coins.push(coin2);
}

// function timer

function timer() {

    // if gameState === "start"

    if (gameState === "start") {

        // decreasing 1 from count

        count = count - 1;

        // if count <= 0

        if (count <= 0) {

            // clearing Interval of counter

            clearInterval(counter);

            // adding image to ghost1 

            ghost1.addImage(ghost1I);

            // adding image to ghost2

            ghost2.addImage(ghost2I);

            // adding image to ghost3

            ghost3.addImage(ghost3I);

            // adding image to ghost4

            ghost4.addImage(ghost4I);

            // adding image to ghost5

            ghost5.addImage(ghost1I);

            // adding image to ghost7

            ghost7.addImage(ghost3I);

            // setting the value of touch1, touch2, touch3, touch4 and touch5

            touch1 = 0;
            touch2 = 0;
            touch3 = 0;
            touch4 = 0;
            touch5 = 0;

            // for returning everything

            return;
        }
    }
}

// function timer2

function timer2() {

    // if gameState === "start"

    if (gameState === "start") {

        // decreasing 1 from count2

        count2 = count2 - 1;

        // if count3 <= 0 && gameState === "start"

        if (count2 <= 0 && gameState === "start") {
            // clearing Interval of counter2

            clearInterval(counter2);

            // for returning everything

            return;
        }
    }
}

// function timer3

function timer3() {

    // if gameState === "start"

    if (gameState === "start") {

        // decreasing 1 from count3

        count3 = count3 - 1;

        // if count3 <= 0 && gameState === "start"

        if (count3 <= 0 && gameState === "start") {

            // clearing Interval of counter3

            clearInterval(counter3);

            // for returning everything

            return;
        }
    }
}

// function reset

function reset() {

    // to call gameState "begin"

    gameState = "begin";

    // if cherry

    if (cherry) {
        cherry.visible = true;
    }

    //  if macman touches cherry

    if (macman.isTouching(cherry)) {
        cherry.destroy();
        life = 3;
    }

    // setting the value of g3b 

    g3b = 0;

    // setting the value of g4b 

    g4b = 0;

    // setting the value of g2tw 

    g2tw = 0;

    // setting the value of g1tw 

    g1tw = 0;

    // setting the value of count2 

    count2 = 5;

    // setting the value of count3 

    count3 = 10;

    // setting the value of count 

    count = 200;

    // setting the value of touch1 

    touch1 = 0;

    // setting the value of touch2

    touch2 = 0;

    // setting the value of touch3 

    touch3 = 0;

    // setting the value of touch4 

    touch4 = 0;

    // setting the value of touch5 

    touch5 = 0;

    // destroying macman

    macman.destroy();

    // destroying ghost1

    ghost1.destroy();

    // destroying ghost2

    ghost2.destroy();

    // destroying ghost3

    ghost3.destroy();

    // destroying ghost4

    ghost4.destroy();

    // destroying ghost5

    ghost5.destroy();

    // destroying ghost7

    ghost7.destroy();

    // making macman

    macman = createSprite(700, 680);
    macman.addImage(macmanClosedI);
    macman.scale = 0.040;
    macman.setCollider("circle", 0, 0, 300);

    // making ghost1

    ghost1 = createSprite(670, 360);
    ghost1.addImage(ghost1I);
    ghost1.scale = 0.06;

    // making ghost2

    ghost2 = createSprite(670, 410);
    ghost2.addImage(ghost2I);
    ghost2.scale = 0.06;

    // making ghost3

    ghost3 = createSprite(700, 410);
    ghost3.addImage(ghost3I);
    ghost3.scale = 0.06;

    // making ghost4

    ghost4 = createSprite(730, 410);
    ghost4.addImage(ghost4I);
    ghost4.scale = 0.06;

    // making ghost5

    ghost5 = createSprite(730, 360);
    ghost5.addImage(ghost1I);
    ghost5.scale = 0.06;

    // making ghost7

    ghost7 = createSprite(700, 360);
    ghost7.addImage(ghost3I);
    ghost7.scale = 0.06;

}

function windowResized() {
    resizeCanvas(displayWidth, displayHeight);
}
