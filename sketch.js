var gameState = "play"
var aircraft, aircraftImage, ufo,ufoImage,bground,bgroundImage,ufoGroup,fire,fireImage,survivalTime;


function preload()
{
 bgroundImage = loadImage("space.png");
  aircraftImage = loadImage("a.png");
  ufoImage = loadImage("d.png");
  fireImage = loadImage("f.png");
  
}

function setup() 
{
  createCanvas(600,600);
  bground = createSprite(200,200);
  bground.addImage(bgroundImage);
  bground.velocityX = -5;
  bground.scale = 2.3;
  
  aircraft = createSprite(50,200,10,10);
  aircraft.addImage(aircraftImage);
  
  ufoGroup = new Group () ;
}

function draw() 
{
   if(gameState==="play")
     {
       createUfo ();
       
        if(keyDown("up"))
    {
      aircraft.y = aircraft.y-3;
    }
  
    if(keyDown("down"))
    {
      aircraft.y = aircraft.y+3;
    }
         drawSprites();
     }
  if(aircraft.isTouching(ufoGroup))
    {
      aircraft.addImage(fireImage);
      gameState="end";
      
    }
   else if(gameState==="end")
     {
       bground.velocityX = 0;
       textSize(25);
       stroke("red");
       text("GAME OVER",200,200);
     }

 if(bground.x<0)
   {
     bground.x = bground.width/2;
   }
  
 survivalTime =  Math.ceil(frameCount/frameRate())
    text("Survival Time:"+survivalTime,100,50);
   
  
  
}

function createUfo ()
{
  if(World.frameCount%200===0)
    {
      
      ufo = createSprite(500,Math.round(random(120,400)),10,10);
      ufo.addImage(ufoImage);
      ufo.velocityX = -7;
      ufo.lifetime = 800;
      ufoGroup.add(ufo);
    }
}