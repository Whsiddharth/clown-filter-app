var noseX=0;
var noseY=0;

function take_snapshot(){
    save('myFilterImage.png');
}
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/D0cD7cZF/clownnose.png");
}
function draw(){
    image(video, 0, 0, 300,250);

    image(clown_nose, noseX-15, noseY-15, 40,30);
}
function setup(){
    canvas=createCanvas(300,250);
    canvas.position(491,175);
    video=createCapture(VIDEO);
    video.size(300,250);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded(){
    console.log("poseNet model is loaded");
}
function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;

        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }
}