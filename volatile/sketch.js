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

let canvWidth = window.innerWidth
let canvHeight = window.innerHeight - 100

function setup() {
    colorMode(HSB, 100)
    noLoop()
    createCanvas(canvWidth, canvHeight)
    strokeWeight(10)
}

function draw() {
    strokeWeight(2)
    n_lines = max(5, randomGaussian(15, 4))

    startY = canvHeight / 10
    stopY = canvHeight - startY
    rangeY = stopY - startY

    startX = canvWidth / 8
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
        console.log("Sorted list:")
        console.log(xes_on_line)
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

        lineY = startY + (i + 1) * deltaY

        prevX = startX
        prevY = lineY
        for(j = 0; j < lineXes[i].length; j++) {
            x = lineXes[i][j]
            y = lineY + randomGaussian(0, deltaY / 10)

            strokeWeight(3)
            line(prevX, prevY, x, y)
            prevX = x
            prevY = y
        }
        strokeWeight(3)
        line(prevX, prevY, stopX, lineY)
    }

    textSize((Math.min(canvHeight,canvWidth) / 9) * randomGaussian(1, 0.1));
    noStroke()
    fill(currentHue, currentSaturation, currentBrightness);
    textFont("Courier");
    rotate(HALF_PI);
    text('VOLATILE', 5, 0) //circleCenterX * 0.7, canvHeight / 2 - (1.25 * circleRadius));
}