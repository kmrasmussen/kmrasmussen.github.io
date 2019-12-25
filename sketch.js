function randint(min, max) {
    return Math.random() * (max - min) + min;
}

function k_stroke(colorArray) {
    stroke(colorArray[0], colorArray[1], colorArray[2])
}

function k_point(vec) {
    point(vec[0], vec[1])
}

function k_line(vec1, vec2) {
    line(vec1[0], vec1[1], vec2[0], vec2[1])
}

let canvWidth = window.innerWidth * 0.95
let canvHeight = window.innerHeight * 0.95

let hue = randint(10, 90)
let title = 'ANTIPIANO'

function setup() {
    createCanvas(canvWidth, canvHeight)
    colorMode(HSB, 100)
    noLoop()
}

function mouseClicked() {
    console.log(mouseX + "," + mouseY)
    if(mouseX < canvWidth * 0.5 || mouseX > canvWidth) {
        return false;
    }
    if(mouseY > canvHeight * 0.0 && mouseY < canvHeight * 0.1) {
        console.log("about")
        window.location.href = './about/index.html'
    }
    else if(mouseY > canvHeight * 0.1 && mouseY < canvHeight * 0.2) {
        console.log("./closure")
        window.location.href = './closure/index.html'
    }
    else if(mouseY > canvHeight * 0.2 && mouseY < canvHeight * 0.3) {
        console.log("./volatile")
        window.location.href = './volatile/index.html'
    }
    if(mouseY > canvHeight * 0.3 && mouseY < canvHeight * 0.4) {
        console.log("./erdos-revyi")
        window.location.href = './erdos-renyi/index.html'
    }
    if(mouseY > canvHeight * 0.4 && mouseY < canvHeight * 0.5) {
        console.log("./tree")
        window.location.href = './tree/index.html'
    }
    return false;
}

function draw() {
    strokeWeight(20)

    noStroke()
    fill(hue, 30, 100);
    textFont("Courier");
    titleHeight = textWidth(title);
    if(canvWidth > canvHeight) {
        canvWidth = 380
        canvHeight = 550
    }

    console.log("Width:", canvWidth)
    console.log("Height:", canvHeight)
    titleSize = canvWidth / 4
    textSize(canvWidth / 10)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("about", canvWidth * 0.5, canvHeight * 0.1)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("closure", canvWidth * 0.5, canvHeight * 0.2)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("volatile", canvWidth * 0.5, canvHeight * 0.3)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("graph", canvWidth * 0.5, canvHeight * 0.4)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("tree", canvWidth * 0.5, canvHeight * 0.5)

    fill(hue, 30, 70);
    rotate(HALF_PI);
    textSize(titleSize)
    text("PIANO", 0, 0 * titleSize)
    text("ANTI-", 0, -1 * titleSize)
}