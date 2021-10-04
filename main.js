nose_X=0
nose_Y=0
Left_X=0
Right_X=0
difference=0

function setup() {
    canvas = createCanvas(550, 500)
    canvas.position(100, 200)

    video = createCapture(VIDEO)
    video.position(850, 250)
    video.size(500, 400)

    posenet = ml5.poseNet(video, modelLoaded)
    posenet.on('pose', gotResult)
}
//nose = position and wrist movement = size
function modelLoaded() {
    console.log("Model Loaded Successfully")
}

function gotResult(results) {
    if (results.length > 0) {
        console.log(results)
        nose_X=results[0].pose.nose.x
        nose_Y=results[0].pose.nose.y
        Left_X=results[0].pose.leftWrist.x
        Right_X=results[0].pose.rightWrist.x
        difference=floor(Left_X-Right_X)
        console.log(difference)
    }
}
function draw(){
    background("cyan")
    document.getElementById("size").innerHTML="Size of the Font is "+difference+"pixel(s)"
    fill("crimson")
    stroke("black") 
    textSize(difference)
    text("Hello",nose_X,nose_Y)

}