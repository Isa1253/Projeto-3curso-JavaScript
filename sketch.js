let cor;
let circuloY;
let circuloX;


function setup() {
  createCanvas(1000, 800);
   background("white");
cor=color(random(0,255),random(0,255),random(0,255));
circuloY =[random(height),random(height),random(height)];
  circuloX = [0,0,0];
  
  

}


function draw() {
  fill(cor);
  for (let quantos in circuloX) {
    circle(circuloX[quantos], circuloY[quantos]+= random (0,3); circuloY[quantos]+= random(-3,3);
    
    
    if (circuloX[quantos] >= width) {
      circuloX[quantos] = 0;
      circuloY[quantos] = random(height);
    }
  
    }
    



  





   







  

  if (mouseIsPressed){
    
cor=color(random(0,255),random(0,255),random(0,100));
    }
  
  }
