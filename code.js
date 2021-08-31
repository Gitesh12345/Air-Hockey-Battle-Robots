var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["14e9da0f-625f-4d07-9f0e-88f92fe70db7","bd094db0-e6a9-4112-b2fb-3ea75da77bc1","bf747bfb-4e2f-45c7-8d07-83eb562d8ba6","bdae7b08-b716-4887-8d8d-eb57bb98c5f2","a82f70de-da0e-425d-a29d-ef3e0416f189","7ddc8380-ec14-4638-a018-b06f19bf2913","079d509a-cc9f-402a-9a9d-91ddaa0bf419","a593ec1a-6561-4b5f-a16e-00b74ec36c61","f2156365-0d38-4dfc-b3e2-8b9de0d3f40d","72a83efc-b539-4667-a444-87a9f3d8d583"],"propsByKey":{"14e9da0f-625f-4d07-9f0e-88f92fe70db7":{"name":"sport","sourceUrl":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/AYKgiaNjv0UtbPRP89eUDfF6ChW0HvBm/category_backgrounds/sports_scoccer.png"},"bd094db0-e6a9-4112-b2fb-3ea75da77bc1":{"name":"ball","sourceUrl":"assets/api/v1/animation-library/gamelab/gidpYsDCQ6vgtpIhHHB9XL7sDgLB0j9U/category_icons/basketball.png","frameSize":{"x":391,"y":391},"frameCount":1,"looping":true,"frameDelay":2,"version":"gidpYsDCQ6vgtpIhHHB9XL7sDgLB0j9U","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":391,"y":391},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gidpYsDCQ6vgtpIhHHB9XL7sDgLB0j9U/category_icons/basketball.png"},"bf747bfb-4e2f-45c7-8d07-83eb562d8ba6":{"name":"computer","sourceUrl":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png","frameSize":{"x":260,"y":140},"frameCount":1,"looping":true,"frameDelay":2,"version":"XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":260,"y":140},"rootRelativePath":"assets/api/v1/animation-library/gamelab/XA3.aTe37caWTDIkZhc4pq8ueAwsYaFN/category_retro/spacebattle_03.png"},"bdae7b08-b716-4887-8d8d-eb57bb98c5f2":{"name":"player","sourceUrl":null,"frameSize":{"x":216,"y":290},"frameCount":1,"looping":true,"frameDelay":12,"version":"CpFbgckLSiurVK_EvNL653U9hjpAaMh_","categories":["retro"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":290},"rootRelativePath":"assets/bdae7b08-b716-4887-8d8d-eb57bb98c5f2.png"},"a82f70de-da0e-425d-a29d-ef3e0416f189":{"name":"audience","sourceUrl":"assets/api/v1/animation-library/gamelab/wpSdFe2hmIzMXy67OwlaFj7TTt698xiT/category_people/blue_shirt_hand_up3.png","frameSize":{"x":176,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"wpSdFe2hmIzMXy67OwlaFj7TTt698xiT","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":176,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wpSdFe2hmIzMXy67OwlaFj7TTt698xiT/category_people/blue_shirt_hand_up3.png"},"7ddc8380-ec14-4638-a018-b06f19bf2913":{"name":"audience2","sourceUrl":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png","frameSize":{"x":175,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":175,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/bO3KvTIGBpz2yQ4A_psLtdJiX5YeAwGs/category_people/blue_shirt_hand_up2.png"},"079d509a-cc9f-402a-9a9d-91ddaa0bf419":{"name":"audience3","sourceUrl":"assets/api/v1/animation-library/gamelab/TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu/category_people/blue_skirt_hand_behind.png","frameSize":{"x":155,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":155,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/TSnqXo2lg9WOcKH11dh4Pi63HZpojCbu/category_people/blue_skirt_hand_behind.png"},"a593ec1a-6561-4b5f-a16e-00b74ec36c61":{"name":"audience4","sourceUrl":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png","frameSize":{"x":136,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":136,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/pprrkT8zHUyC6q2DoLBo92Y_4r4kkTCW/category_people/blue_shirt_book.png"},"f2156365-0d38-4dfc-b3e2-8b9de0d3f40d":{"name":"audience5","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","frameSize":{"x":119,"y":383},"frameCount":1,"looping":true,"frameDelay":2,"version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":119,"y":383},"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"72a83efc-b539-4667-a444-87a9f3d8d583":{"name":"audience6","sourceUrl":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png","frameSize":{"x":123,"y":397},"frameCount":1,"looping":true,"frameDelay":2,"version":"Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":123,"y":397},"rootRelativePath":"assets/api/v1/animation-library/gamelab/Y5N4Tt_21f8aWDAE9zR6K7n137NxqecC/category_people/brown_sweater_hands_in_pockets.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var line1=createSprite(35,200,5,400);
line1.shapeColor = "white";
var line2=createSprite(200,15,400,5);
line2.shapeColor = "white";
var line3=createSprite(365,200,5,400);
line3.shapeColor = "white";
var line4=createSprite(200,385,400,5);
line4.shapeColor = "white";
var line5=createSprite(200,115,400,2);
line5.shapeColor = "white";
var line6=createSprite(200,285,400,2);
line6.shapeColor = "white";

var gameState="serve"
var computerScore=0;
var playerScore=0;
var back=0;
var ground=createSprite(200,200,1,1);

var striker=createSprite(200,200,15,15);
striker.setAnimation("ball");
striker.scale= 0.07;

striker.shapeColor = "red";

var goal1=createSprite(200,11,118,20);
goal1.shapeColor = "yellow";

var goal2=createSprite(200,389,110,20);
goal2.shapeColor = "yellow";

var computerpaddle=createSprite(200,50,50,10);
computerpaddle.setAnimation("computer");
computerpaddle.scale= 0.2;
computerpaddle.shapeColor = "blue";

var playerpaddle=createSprite(200,350,50,10);
playerpaddle.setAnimation("player");
playerpaddle.scale= 0.2
playerpaddle.shapeColor = "blue";

// audience

var audience1=createSprite(15,50,5,5);
var audience2=createSprite(18,105,5,5);
var audience3=createSprite(15,185,5,5);
var audience4=createSprite(15,250,5,5);
var audience5=createSprite(15,320,5,5);

var audience6=createSprite(380,50,5,5);
var audience7=createSprite(383,105,5,5);
var audience8=createSprite(380,185,5,5);
var audience9=createSprite(380,250,5,5);
var audience10=createSprite(380,320,5,5);
// audience animation
audience1.setAnimation("audience");
audience2.setAnimation("audience2");
audience3.setAnimation("audience3");
audience4.setAnimation("audience4");
audience5.setAnimation("audience5");

audience6.setAnimation("audience");
audience7.setAnimation("audience2");
audience8.setAnimation("audience3");
audience9.setAnimation("audience4");
audience10.setAnimation("audience5");

// audience animation scale
audience1.scale= 0.2;
audience2.scale= 0.2;
audience3.scale= 0.2;
audience4.scale= 0.2;
audience5.scale= 0.2;

audience6.scale= 0.2;
audience7.scale= 0.2;
audience8.scale= 0.2;
audience9.scale= 0.2;
audience10.scale= 0.2;

function draw (){
  
  background("green");
  
  createEdgeSprites()
  
 if(gameState === "serve") {
   textSize(20);
   fill("maroon");
   text("PRESS ENTER TO SERVE",90,150);
 }
  fill("yellow");
  textSize(20);
  text(computerScore,50,190);

  fill("yellow");
  textSize(20);
  text(playerScore,50,225);


  createEdgeSprites();
  playerpaddle.bounceOff(line1);
  playerpaddle.bounceOff(line3);
  striker.bounceOff(line1);
  striker.bounceOff(line2);
  striker.bounceOff(line3);
  striker.bounceOff(line4);
  striker.bounceOff(computerpaddle);
  striker.bounceOff(playerpaddle);
  computerpaddle.bounceOff(line1);
  computerpaddle.bounceOff(line3);

  if(keyDown("LEFT_ARROW")) {
    playerpaddle.x = playerpaddle.x-10;
  }
  
  if(keyDown("RIGHT_ARROW")) {
    playerpaddle.x = playerpaddle.x+10;
  }
  
  if(keyDown("ENTER") && gameState==="serve"){
    serve();
    gameState = "play";
  }
    
  computerpaddle.x=striker.x;
  

  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
    
  }
  
  
if (striker.isTouching(goal1) || striker.isTouching(goal2)) {
   if(striker.isTouching(goal2)){
      computerScore = computerScore+1;
    }
   if(striker.isTouching(goal1)) {
     playerScore = playerScore+1;
   }
   
   reset();
   gameState = "serve";
  }
  
if(computerScore === 5 || playerScore === 5){
  gameState = "over";
  text("GAME OVER!!",165,160);
  text("Press R to RESTART",150,180);
}
if (keyDown("r") && gameState === "over") {
  computerScore=0;
  playerScore=0;
  gameState="serve";
}
  drawSprites();
}


function serve(){
  striker.velocityX = 6;
  striker.velocityY = -7;
}

function reset(){
  striker.x=200;
  striker.y=200;
  striker.velocityX=0;
  striker.velocityY=0;
}
if (striker.isTouching(goal1) || striker.isTouching(goal2)) {
  if(striker.isTouching(goal1)){
    computerScore=computerScore+1;
  }
  if(striker.isTouching(goal2)) {
    playerScore=playerScore+1;
  }
  
  reset();
  gameState="serve";
}


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
