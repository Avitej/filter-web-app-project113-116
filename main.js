noseX = 0;
noseY = 0;
function preload() {
    clown_nose = loadImage('https://i.postimg.cc/PJbb3pNn/Moustache-PNG-Pic.png');
}
function setup() {
    canvas = createCanvas(340,340);
    canvas.position(110,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340, 340);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw(){
    image(video, 0, 0, 340, 340);
    image(clown_nose, noseX, noseY, 50, 50);
}
function take_snapshot() {
    save('my_filter_image.png');
}
function modelLoaded() {
    console.log('posenet is initialized')
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x - 25;
        noseY = results[0].pose.nose.y - 0;
        console.log("nose x = "+noseX);
        console.log("nose y = "+noseY);
    }   
   
   }