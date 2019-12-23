function randint(min, max) {
    return Math.random() * (max - min) + min;
}

function k_stroke(colorArray) {
    stroke(colorArray[0], colorArray[1], colorArray[2])
}

function generateColorVariant(original) {
    hue_noise = randomGaussian(0, 20)
    new_hue = (original[0] + hue_noise) % 100
    saturation_noise = abs(randomGaussian(0, 30))
    new_saturation = original[1] - saturation_noise
    brightness_noise = abs(randomGaussian(0, 30))
    new_brightness = original[2] - brightness_noise
    return [new_hue, new_saturation, new_brightness]
}

let hue = randint(10, 90)
let strokeColorInitial = [hue, 100, 100]

let canvWidth = window.innerWidth * 0.95
let canvHeight = window.innerHeight * 0.95

let n_lines = null
let startY = canvHeight / 12
let stopY = canvHeight - (startY * 0.5)
let rangeY = stopY - startY
let startX = canvWidth / 10
let stopX =  canvWidth - startX
let rangeX = stopX - startX
let lineXes = []

let currentHue = hue
let currentSaturation = 10
let currentBrightness = 70
let deltaHue = null
let deltaSaturation = null
let deltaBrightness = null

let currentI = 0
let currentJ = 0
let lineY = null
let prevX = null
let prevY = null

function setup() {
    colorMode(HSB, 100)
    createCanvas(canvWidth, canvHeight)
    strokeWeight(randint(2,5))
    n_lines = max(5, randomGaussian(17, 4))
    deltaY = rangeY / (n_lines + 1)
    
    for(i = 0; i < n_lines; i++) {
        xes_on_line = []
        n_points_on_line = Math.pow((i), 2)
        for(j = 0; j < n_points_on_line; j++) {
            xes_on_line.push(randint(startX, stopX))
        }
        xes_on_line = xes_on_line.sort(function(a, b){return a-b});
        lineXes.push(xes_on_line)
    }

    deltaHue = 30 / (n_lines + 1)
    deltaSaturation = (100 - currentSaturation) / (n_lines + 1)
    deltaBrightness = (100 - currentBrightness) / (n_lines + 1)
    stroke(currentHue, currentSaturation, currentBrightness)

    lineY = startY + currentI * deltaY
    prevX = startX
    prevY = lineY
    frameRate(1000)
}

function draw() {
    for(i = 0; i < n_lines; i++) {
        lineY = startY + i * deltaY
        if(currentJ < Math.pow((i), 2)) {
            x = lineXes[i][currentJ]
            y = lineY + randomGaussian(0, deltaY / 10)
            line(prevX, prevY, x, y)
            prevX = x
            prevY = y
            currentJ++
        }
    }

    if((currentJ + 1 >= lineXes[n_lines - 1].length)) {
        console.log("Stopping loop")
        noLoop()
        titleSize = startX * 2/3
        noStroke()
        fill(currentHue, currentSaturation, currentBrightness)
        textFont("Courier");
    
        noStroke()
        fill(currentHue, currentSaturation, currentBrightness)
        textFont("Courier");
    
        textSize(titleSize)
        rotate(HALF_PI);
        text('VOLATILE', 0, 0)
    }
}

console.log("Check out GitHub for source code!")