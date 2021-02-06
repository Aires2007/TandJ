var cat, catImage, catAnimation;
var mouse, mouseImage, mouseAnimation;
var backSprite, backImage;

function preload() {
   
    backImage = loadImage("garden.png");

    mouseImage = loadImage("mouse1.png");
    mouseAnimation = loadAnimation("mouse2.png","mouse3.png")

    catAnimation = loadAnimation("cat2.png","cat3.png")
    catImage = loadImage("cat1.png");
}

function setup(){
    createCanvas(1000,800);

    backSprite = createSprite(0,0,1000,800);
    backSprite.addImage(backImage);

    mouse = createSprite(200,200,10,10);
    mouse.addImage(mouseImage);



}

function draw() {

    cat = createSprite(800,200,10,10);
    cat.addImage(catImage);

    background(255);

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5;
        cat.addAnimation("catRuning", catAnimation);

        mouse.addAnimation("mouseTaunting", mouseAnimation)
    }



}
