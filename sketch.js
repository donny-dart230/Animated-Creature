let sun = 10;
let moon = 400;
let x = 50;
let y = 400;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(31, 151, 184);
  
  if (sun > 300){
    background(96, 117, 128);
  }
  
  fill (190, 194, 180);
  ellipse(10,moon,160);
  
  if(sun > 300){
    y-1
    
  fill (255,255,255)
  triangle( 248, y=14, 254, y=14, 251, y=5 );
  triangle(248, y=14, 254, y=14, 251, y=22);
  triangle(250, y=12, 250, y=16, 242, y=14);
  triangle(250, y=11, 250, y=17, 260, y=14);
  ellipse(251, y=14, 5);
    
    fill (255,255,255)
  triangle( 50, y=14, 56, y=14, 53, y=5 );
  triangle(50, y=14, 56, y=14, 53, y=22);
  triangle(52, y=11, 52, y=17, 45, y=14);
  triangle(52, y=11, 52, y=17, 62, y=14);
  ellipse(53, y=14, 5);
  
  fill (255, 255, 255);
  triangle( 140, y+114, 149, y+114, 144, y+103 );
  triangle(140, y+114, 149, y+114, 145, y+123);
  triangle(144, y+111, 144, y+117, 132, y+114);
  triangle(144, y+111, 144, y+117, 154, y+114);
  ellipse(144, y+114, 5);
  y= y+1;
  
  
  }
  
  fill(235, 235, 52);
  ellipse(10,sun,160);
  
  fill(69, 184, 31);
  strokeWeight (0);
  rect(0, 300, 400, 100);
  
  fill(222, 215, 149);
  rect(199,100,350,200);
  fill(89, 87, 71);
  triangle(199,100,400,100,400,10);
  rect(345,210, 50, 90);
  fill(184, 170, 68);
  ellipse(350, 260,5,5);
  fill(47, 182, 189);
  rect(260,190,50,50);
fill(0,0,0);
  strokeWeight(2);
  line(285, 240, 285, 190);
  line(260,215,310,215 );
  
  stroke(26, 219, 46);
  strokeWeight(1);
  line(360,360, 360, 340);
  line(360,360, 354, 344);
  line(360,360, 366, 344);
  
  line(100,350, 100, 330);
  line(100,350, 94, 331);
  line(100,350, 106, 331);
  
  line(15,360, 15, 340);
  line(15,360, 10, 342);
  line(15,360, 20, 342);
  
  stroke(120, 125, 60);
  strokeWeight(0);
  fill(255, 255, 255);
  ellipse(200, 100, 100, 100);
  ellipse(200, 200, 140, 130);
  ellipse(200, 300, 160, 140);
  fill(255,255,255);
  ellipse(185,95,25,21);
  fill(20,20,20);
  ellipse(185,95,9,20);
  fill(255,255,255);
  ellipse(225,95,25,21);
  fill(20,20,20);
  ellipse(225,95,9,20);
  fill(0,0,0);
  strokeWeight(3);
  line(130, 200, 75, 180);
  line(75,180,73,125);
  line(75,165,60,125);
  line(75,165,85,125);
  line(270,200,315,180);
  line(315,180,315,125);
  line(315,165,330,125);
  line(315,165,300,125);
  rect(198, 200, 5, 5);
  rect(198, 230, 5, 5);
  rect(198, 170, 5, 5);
  ellipse(204,131,20,10);
  fill(235, 140, 52);
  strokeWeight(0);
  triangle(200,105,200,120,221,112);
  
  strokeWeight(2);
  fill (91, 245, 88);
  line(60, 300, 60, 270);
  strokeWeight(0);
  fill(237, 19, 208);
  triangle (50,270, 68, 270,60,250 );
  triangle (50,270, 68, 270, 60, 290);
  triangle (60, 278, 60, 260, 42, 269);
  triangle (60, 278, 60, 260, 78, 268);
  strokeWeight(1);
  fill(191, 194, 50);
  ellipse(60,270, 20,20);
  
  sun = sun + 1;
  moon = moon - 1;
}