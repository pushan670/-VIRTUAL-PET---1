//Create variables here
var dogImage,happyDogImage,database,foodS,foodStock;

function preload(){
 
  dogImage= loadImage("images/dogImg.png");
  happyDogImage=loadImage("images/dogImg1.png");
}



function setup() {
	createCanvas(1000,1000);
  dog=createSprite(400,500,40,40);
 dog.addImage(dogImage);

  database=firebase.database();
  var foodStock=database.ref('food');
  foodStock.on("value",readStock);
}


function draw() {  
 background(46,139,87);

 if(keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogImage);
 }
 drawSprites();
  
  text("Press up-arrow key to feed the pet !",50,70);
}

function readStock(data){
  foodS=data.val();
}
function writeStock(x){
  database.ref('/').update({
    food:x
  })
}