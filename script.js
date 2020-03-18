function readFile(){
	var file = document.getElementById("file_input");
	var source = document.getElementById("video_here");
	source.src = URL.createObjectURL(file.files[0]);
	source.load();
}

function drawPoints(points, context) {
	// DrawPoints overt the Canvas
	if (points.score > 0.5){
		var nose = points.keypoints[0].position;
		var leftEye = points.keypoints[1].position;
		var rightEye = points.keypoints[2].position;
		var leftEar = points.keypoints[3].position;
		var rightEar = points.keypoints[4].position;
		var leftShoulder = points.keypoints[5].position;
		var rightShoulder = points.keypoints[6].position;
		var leftElbow = points.keypoints[7].position;
		var rightElbow = points.keypoints[8].position;
		var leftWrist = points.keypoints[9].position;
		var rightWrist = points.keypoints[10].position;
		var leftHip = points.keypoints[11].position;
		var rightHip = points.keypoints[12].position;
		var leftKnee = points.keypoints[13].position;
		var rightKnee = points.keypoints[14].position;
		var leftAnkle = points.keypoints[15].position;
		var rightAnkle = points.keypoints[16].position;
		context.fillStyle = "#FF0000";
		context.fillRect(nose.x, nose.y, 5, 5);
		context.fillRect(leftEye.x, leftEye.y, 5, 5);
		context.fillRect(rightEye.x, rightEye.y, 5, 5);
		context.fillRect(leftEar.x, leftEar.y, 5, 5);
		context.fillRect(rightEar.x, rightEar.y, 5, 5);
		context.fillRect(leftShoulder.x, leftShoulder.y, 5, 5);
		context.fillRect(rightShoulder.x, rightShoulder.y, 5, 5);
		context.fillRect(leftElbow.x, leftElbow.y, 5, 5);
		context.fillRect(rightElbow.x, rightElbow.y, 5, 5);
		context.fillRect(leftWrist.x, leftWrist.y, 5, 5);
		context.fillRect(rightWrist.x, rightWrist.y, 5, 5);
		context.fillRect(leftHip.x, leftHip.y, 5, 5);
		context.fillRect(rightHip.x, rightHip.y, 5, 5);
		context.fillRect(leftKnee.x, leftKnee.y, 5, 5);
		context.fillRect(rightKnee.x, rightKnee.y, 5, 5);
		context.fillRect(leftAnkle.x, leftAnkle.y, 5, 5);
		context.fillRect(rightAnkle.x, rightAnkle.y, 5, 5);
	}
	return context;
}

var thecanvas = document.createElement("canvas");
const width = 400;
const height = 400;

function generateThumbnail(i) {     
    //generate thumbnail URL data
    var context = thecanvas.getContext('2d');
    thecanvas.width = width;
    thecanvas.height = height;
    context.drawImage(video, 0, 0, width, height);
    context = drawPoints(i, context);
    dataURL = thecanvas.toDataURL();
    //create img
    var img = document.getElementById("image");
    img.setAttribute('src', dataURL);
    //clear canvas for redrawing.
    context.clearReact(0, 0, width, height);
}

document.getElementById("Submit").addEventListener("click", readFile);

var video = document.getElementById("video_here"); // added for clarity: this is needed
var i = 0;

video.addEventListener('loadeddata', function() {
    this.currentTime = i;
});

video.addEventListener('seeked', function() {

    // now video has seeked and current frames will show
    // at the time as we expect
    main().then((p) => generateThumbnail(p));
    // when frame is captured increase, here by 5 seconds
    i += 1;

    // if we are not passed end, seek to next interval
    if (i <= this.duration) {
        // this will trigger another seeked event
        this.currentTime = i;
    }
    else {
        // Done!, next action
    }
});

//let poses = [];
async function main(){
	//Load posenet model
	const net = await posenet.load();

	const pose = await net.estimateSinglePose(thecanvas, {
	  flipHorizontal: false
	});
	//poses.push(pose);
	return pose;
}