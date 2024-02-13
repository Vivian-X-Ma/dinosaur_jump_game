let hero;
let obstacles = [];
let soundClassifier;

function preload() {
  const options = { probabilityThreshold: 0.95 };
  soundClassifier = ml5.soundClassifier("SpeechCommands18w", options); 
}

function gotCommand(error, result) {
  if (error) {
    console.error(error);
  }
  if (result[0].label == "up") {
    hero.jump();
  }
} 

function setup() {
  createCanvas(800, 500);
  hero = new Hero();
  soundClassifier.classify(gotCommand);
}

function keyPressed() {
  if (key == " ") {
    hero.jump();
  }
}

function draw() {
  if (random (1) < 0.005)  {
    obstacles.push(new Obstacle());
  }
  background(220);
  for (let o of obstacles) {
    o.move();
    o.show();
    if (hero.hits(o)) {
     console.log("game over");
      noLoop();
    }
  }
    
  hero.show();
  hero.move();
  
}