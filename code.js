var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["373175ce-88dd-449b-8da3-d290b6e5f106","3ff46b41-07b7-42a7-8410-afff26312f4b","25bda4e8-2e9a-4dba-90a0-5d1e0797a632"],"propsByKey":{"373175ce-88dd-449b-8da3-d290b6e5f106":{"name":"THIEF","sourceUrl":"assets/api/v1/animation-library/gamelab/xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb/category_characters/kid_44_suit.png","frameSize":{"x":152,"y":300},"frameCount":1,"looping":true,"frameDelay":2,"version":"xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb","loadedFromSource":true,"saved":true,"sourceSize":{"x":152,"y":300},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xEKE0cQH799pqBzhs5bxrKID2ZqNE4Gb/category_characters/kid_44_suit.png"},"3ff46b41-07b7-42a7-8410-afff26312f4b":{"name":"diamond","sourceUrl":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o","loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/wa81_Ik95NqJUJzWlrUAZU1P7HMPhR9o/category_obstacles/ore_diamond.png"},"25bda4e8-2e9a-4dba-90a0-5d1e0797a632":{"name":"car_black_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw","loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oedEYhPfzPWR_4kkfuEfPPuRKABKTEQw/category_vehicles/car_black.png"}}};
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

var diamond = shape(390,0,380,10,390,20,400,10);
var thief = createSprite(50,380,20,20);
thief.setAnimation("THIEF");
thief.scale = 0.2;
var laser1 = createSprite(50,150,200,5);
laser1.shapeColor = "green";
laser1.velocityX = 20;
laser1.velocityY = 0;
var laser2 = createSprite(100,10,5,200);
laser2.velocityX = 0;
laser2.velocityY =20;
laser2.shapeColor = "blue";
var laser3 = createSprite(200,10,5,200);
laser3.velocityX = 0;
laser3.velocityY =20;
laser3.shapeColor = "red";
var laser4 = createSprite(300,10,5,200);
laser4.velocityX = 0;
laser4.velocityY =20;
laser4.shapeColor = "yellow";
var laser5 = createSprite(50,250,200,5);
laser5.velocityX = 20;
laser5.velocityY =0;
laser5.shapeColor = "pink"
var laser6 = createSprite(50,50,200,5);
laser6.shapeColor = "purple";
laser6.velocityX = 20;
laser6.velocityY = 0;


function draw() {
  background("white");
  
  thief.velocityX=0;
thief.velocityY=0;

   fill("aqua");
  shape(390,0,380,10,390,20,400,10);
  createEdgeSprites();
  
  laser1.bounceOff(edges);
   laser2.bounceOff(edges);
     laser3.bounceOff(edges);
     laser4.bounceOff(edges);
     laser5.bounceOff(edges);
     laser6.bounceOff(edges);
     thief.bounceOff(edges);
  
  if (keyDown("RIGHT_ARROW")) {
    thief.velocityX=3;
    thief.velocityY=0;
  }
  
  if (keyDown("LEFT_ARROW")) {
    thief.velocityX=-3;
    thief.velocityY=0;
  }
  
  if (keyDown("UP_ARROW")) {
    thief.velocityX=0;
    thief.velocityY=-3;
  }
  
 if (keyDown("DOWN_ARROW")) {
    thief.velocityX=0;
    thief.velocityY=3;
  }
   
 if (thief.isTouching(laser1)) {
 laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
   
     if (thief.isTouching(laser2)) {
laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
   
   if (thief.isTouching(laser3)) {
laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
   
   if (thief.isTouching(laser4)) {
 laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
   
   if (thief.isTouching(laser5)) {
 laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
   
   if (thief.isTouching(laser6)) {
 laser1.velocityX=0;
 laser1.velocityY=0;
  laser2.velocityX=0;
 laser2.velocityY=0;
  laser3.velocityX=0;
 laser3.velocityY=0;
 laser4.velocityX=0;
 laser4.velocityY=0;
  laser5.velocityX=0;
 laser5.velocityY=0;
  laser6.velocityX=0;
 laser6.velocityY=0;
  thief.velocityX=0;
thief.velocityY=0;
  fill("red");
  textFont("harrington");
 textSize(25);
 text("Theif is caught",170,180);
   }
  
  
  drawSprites();
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
