 noseX = 0;
 noseY = 0;

 leftWristX = 0;
 rightWristX = 0;
 difference = 0;
 function setup(){
     
     video = createCapture(VIDEO);
     video.size(500, 500);
     canvas = createCanvas(600, 600);
     canvas.position(560, 160);
     poseNet = ml5.poseNet(video, modelLoaded);
     poseNet.on('pose', gotPoses);
  }

  function gotPoses(results){
      if (results.length > 0) {
          console.log(results);
          noseX = results[0].pose.nose.x;
          noseY = results[0].pose.nose.y;
          leftWristX = results[0].pose.leftWrist.x;
          rightWristX = results[0].pose.rightWrist.x;
          difference = floor(leftWristX - rightWristX);
      }
    }


    function draw(){
    background("beige");
    document.getElementById("square_side").innerHTML = "Width and Height of the Square will be" + difference + "px";
    fill("green");
    stroke("black");
    square(noseX, noseY, difference);
}