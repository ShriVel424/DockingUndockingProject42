var spacecraft;
var ISS;
var issimage;
var spacecraftimg;
var backgroundimg;
var hasDocked = false;

function preload(){
  issimage = loadImage("iss.png");
  spacecraftimg = loadImage("spacecraft1.png");
  backgroundimg = loadImage("spacebg.jpg");
  rightSCimg = loadImage("spacecraft4.png");
  leftSCimg = loadImage("spacecraft3.png");
  downSCimg = loadImage("spacecraft2.png");

}

function setup() {
  createCanvas(1000,800);


  ISS = createSprite(500, 290, 50, 50);
  ISS.addImage(issimage);

  spacecraft = createSprite(500, 450, 50, 50);
  spacecraft.scale = 0.2
  spacecraft.addImage(spacecraftimg);

  
}

function draw() {
  background(backgroundimg);  
  spacecraft.addImage(spacecraftimg);

  if (!hasDocked){
    spacecraft.x = spacecraft.x + random(-1,1);
  
    if (keyDown("UP_ARROW")){
      spacecraft.y = spacecraft.y-10;
    }

    if (keyDown("LEFT_ARROW")){
      spacecraft.addImage(leftSCimg);
      spacecraft.x = spacecraft.x-10;
    }

    if (keyDown("RIGHT_ARROW")){
       spacecraft.addImage(rightSCimg);
      spacecraft.x = spacecraft.x+10;
  }
  
   if (keyDown("DOWN_ARROW")){
       spacecraft.addImage(downSCimg);
       spacecraft.y = spacecraft.y+10;
  }
}

if (spacecraft.y <= (ISS.y+70) && spacecraft.x <= (ISS.x-10)){
  hasDocked = true;
  textSize(25);
  fill("white");
  text("Docking Successful",200,300);
}

  drawSprites();
}