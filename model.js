var canvas = document.getElementById("renderCanvas"); // Get the canvas element
var engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

/******* Add the create scene function ******/
var createScene = function () {

    // Create the scene space
    var scene = new BABYLON.Scene(engine);

    // Add a camera to the scene and attach it to the canvas
    var camera = new BABYLON.ArcRotateCamera("Camera", Math.PI / 2, Math.PI / 2, 2, new BABYLON.Vector3(0,50,150), scene);
    camera.attachControl(canvas, true);

    // Add lights to the scene
    var light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 5, 0), scene);
    //var light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 0, -1), scene);

    // Add and manipulate meshes in the scene
    //var sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter:2}, scene);

    BABYLON.SceneLoader.ImportMesh("", "scenes/Dude/", "Dude.babylon", scene,
    function (meshes, particleSystems, skeletons) 
        {          
        //scene.createDefaultCameraOrLight(true, true, true);
        //scene.createDefaultEnvironment();

        //console.log(meshes)
        //scene.beginAnimation(skeletons[0], 0, 100, true, 1.0);
        var skeleton = skeletons[0];
        var mesh = meshes[0];
        mesh.position = new BABYLON.Vector3(0,0,-10);
        mesh.rotation.y = Math.PI * 0;

        scene.registerBeforeRender(function () 
        {

            var head = skeleton.bones[7];
            var leftShoulder = skeleton.bones[32];
            var leftElbow = skeleton.bones[33];
            var leftWrist = skeleton.bones[34];
            var leftHip = skeleton.bones[54];
            var leftKnee = skeleton.bones[55];
            var leftAnkle = skeleton.bones[56];

            var rightShoulder = skeleton.bones[13];
            var rightElbow = skeleton.bones[14];
            var rightWrist = skeleton.bones[15];
            var rightHip = skeleton.bones[50];
            var rightKnee = skeleton.bones[51];
            var rightAnkle = skeleton.bones[52];


            mesh.rotate(BABYLON.Axis.Y, 0.01);
            skeleton.bones[7].setAxisAngle(BABYLON.Axis.Y, Math.PI * 1.8);
            //console.log(skeleton.bones)
            //skeleton.bones[15].rotate(BABYLON.Axis.Y, .01);
            //skeleton.bones[2].rotate(BABYLON.Axis.Z, .01);
            });
        });

    return scene;
    };
/******* End of the create scene function ******/

var scene = createScene(); //Call the createScene function

// Register a render loop to repeatedly render the scene
engine.runRenderLoop(function () {
scene.render();
});

// Watch for browser/canvas resize events
window.addEventListener("resize", function () {
engine.resize();
});

/*******async function poseDetectionFrame() {

//scale an image dowm to a certain factor
const imageScaleFactor = 0.50;
const flipHorizontal = false;
const outputStride = 16;
const imageElement = document.getElementById('cat');
// load the posenet model
const net = await posenet.load();
const pose = await net.estimateSinglePose(imageElement, scaleFactor, flipHorizontal, outputStride);
poseDetectionFrame();
}*****/
