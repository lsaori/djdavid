song = "";
song2 = "";
song_status = "";
song2_status = false;

rightWristX = 0;
rightWristY = 0;

leftWristX = 0;
leftWristY = 0;
function preload(){
    song = loadSound("Is This Really Happening _-TrackTribe.mp3");
    song2 = loadSound("Drop the Tapes - TrackTribe.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded(){
    console.log("PoseNet inicializado!!!(confetes)");
}

function draw(){
    image(video ,0, 0, 600, 500);
    fill("#7FB3D5"); //"#EC7063"
    stroke("#7FB3D5"); //"#EC7063"
    circle(leftWristX, leftWristY, 20);
    if(song2_status == false){
        song2.play();
        document.getElementById("song").innerHTML = "Tocando Is This Really Heappening";
    }
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX: " + rightWristX + "rightWristY :" + rightWristY)
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX: " + leftWristX + "leftWristY :" + leftWristY)
    }
}
