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

function setup() {
    colorMode(HSB, 100)
    noLoop()
    createCanvas(canvWidth, canvHeight)
    strokeWeight(randint(2,5))
}

function draw() {
    n_lines = max(5, randomGaussian(15, 4))

    startY = canvHeight / 12
    stopY = canvHeight - (startY * 0.5)
    rangeY = stopY - startY

    startX = canvWidth / 10
    stopX =  canvWidth - startX
    rangeX = stopX - startX

    stroke(255,0,0)

    deltaY = rangeY / (n_lines + 1)

    lineXes = []

    for(i = 0; i < n_lines; i++) {
        xes_on_line = []
        n_points_on_line = Math.pow((i), 2)
        for(j = 0; j < n_points_on_line; j++) {
            xes_on_line.push(randint(startX, stopX))
        }
        xes_on_line = xes_on_line.sort(function(a, b){return a-b});
        lineXes.push(xes_on_line)
    }

    currentHue = hue
    currentSaturation = 10
    currentBrightness = 70
    deltaHue = 30 / (n_lines + 1)
    deltaSaturation = (100 - currentSaturation) / (n_lines + 1)
    deltaBrightness = (100 - currentBrightness) / (n_lines + 1)
    for(i = 0; i < lineXes.length; i++) {
        stroke(currentHue, currentSaturation, currentBrightness)
        currentHue += deltaHue
        currentSaturation += deltaSaturation
        currentBrightness -= deltaBrightness

        lineY = startY + i * deltaY

        prevX = startX
        prevY = lineY
        for(j = 0; j < lineXes[i].length; j++) {
            x = lineXes[i][j]
            y = lineY + randomGaussian(0, deltaY / 10)
            line(prevX, prevY, x, y)
            prevX = x
            prevY = y
        }
        line(prevX, prevY, stopX, lineY)
    }


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

    //nameSize = (Math.min(canvHeight,canvWidth) / 9) * randomGaussian(1, 0.1) / 3
    //textSize(nameSize)
    //noStroke()
    //fill(currentHue, currentSaturation, currentBrightness)
    //textFont("Courier");
    //rotate(HALF_PI);
}

console.log("Check out GitHub for source code!")