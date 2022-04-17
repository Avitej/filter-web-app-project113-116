function preload() {

}
function setup() {
    canvas = createCanvas(340,340);
    canvas.position(110,250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(340, 340);
    video.hide();
}
function draw(){
    image(video, 0, 0, 340, 340);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
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
     console.log("nose x = "+results[0].pose.nose.x);
     console.log("nose y = "+results[0].pose.nose.y);
 }   

}