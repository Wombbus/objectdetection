var objects = []

fruitbowl = ""
Status = ""

function preload() {
    fruitbowl = loadImage("fruitboiwl.jpg")
}

function setup() {
    canvas = createCanvas(700, 400)
    canvas.center()
    objectDetect = ml5.objectDetector("cocossd", modelLoaded)

}

function modelLoaded() {
    console.log("the model has been loaded");
    Status = true;
    objectDetect.detect(fruitbowl, gotResults)
}

function gotResults(results, error) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(results)
        objects = results
    }
}

function draw() {
    image(fruitbowl, 0, 0, 700, 400)
    if (Status != "") {
        for (i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status:Detecting Objects"
            noFill()
            stroke("magenta")
            rect(40, 50, 370, 320)
            text("fruit bowl", 50, 60)
        }
    }
}