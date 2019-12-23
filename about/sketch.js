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
let title = 'KASPER RASMUSSEN'

function setup() {
    createCanvas(canvWidth, canvHeight)
    colorMode(HSB, 100)
    noLoop()
}

function mouseClicked() {
    console.log(mouseX + "," + mouseY)
    if(mouseX < canvWidth * 0.4 || mouseX > canvWidth) {
        return false;
    }
    else if(mouseY > canvHeight * 0.0 && mouseY < canvHeight * 0.1) {
        console.log("mail")
        window.location.href = 'mailto:obscur@tuta.io'
    }
    else if(mouseY > canvHeight * 0.2 && mouseY < canvHeight * 0.3) {
        console.log("github")
        window.location.href = 'https://github.com/kmrasmussen'
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
    titleSize = canvWidth / 5
    textSize(canvWidth / 14)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("obscur@tuta.io", canvWidth * 0.4, canvHeight * 0.1)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("denmark", canvWidth * 0.4, canvHeight * 0.2)
    fill(hue, 30 + randomGaussian(0, 10), 70 + randomGaussian(0, 10));
    text("github", canvWidth * 0.4, canvHeight * 0.3)

    fill(hue, 30, 70);
    rotate(HALF_PI);
    textSize(titleSize)
    text("RASMUSSEN", 0, 0 * titleSize)
    text("KASPER", 0, -1 * titleSize)
}