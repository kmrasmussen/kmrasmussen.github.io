function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let t = 0
let stopTime = 1500
let canvWidth = window.innerWidth
let canvHeight = window.innerHeight

let circleRadius = (canvHeight / 3)
let circleCenterX = canvWidth / 2
let circleCenterY = canvHeight / 2
let n_movers = 4
let moverStartPos = [circleCenterX, circleCenterY]
let movers = []
let strokeColors = []
let hue = getRandomArbitrary(10, 90)
let strokeColorInitial = [hue, 100, 100]
for(i = 0; i < n_movers; i++) {
    movers.push(moverStartPos)
    strokeColors.push(strokeColorInitial)
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


function k_point(vec) {
    point(vec[0], vec[1])
}

function k_line(vec1, vec2) {
    line(vec1[0], vec1[1], vec2[0], vec2[1])
}

function changeStroke(i) {
    strokeWeight(randomGaussian(4,7))
    stroke(strokeColors[i][0], strokeColors[i][1], strokeColors[i][2])
}

function setup() {
    colorMode(HSB, 100)
    createCanvas(canvWidth, canvHeight)
    background_hue = hue + randomGaussian(0,20)
    background_saturation = abs(randomGaussian(0,20)) //100 - abs(randomGaussian(0, 30))
    background_brightness = 100 - abs(randomGaussian(0, 20)) //100 - abs(randomGaussian(50, 30))
    background(background_hue, background_saturation, background_brightness)

    newColors = []
    for(i = 0; i < strokeColors.length; i++) {
        newColors.push(generateColorVariant(strokeColorInitial))
    }
    strokeColors = newColors

    textSize((circleRadius / 3) * randomGaussian(1, 0.1));
    textColor = generateColorVariant(strokeColorInitial) 
    fill(hue, 100, 100);
    courierFont = loadFont('COURIER.TTF');
    textFont("Courier");
    rotate(HALF_PI);
    text('CLOSURE', 0, 0) //circleCenterX * 0.7, canvHeight / 2 - (1.25 * circleRadius));
    
    //noLoop()
};

function draw() {
    t++;
    if(t > stopTime) {
        noLoop()
    }
    for(i = 0; i < movers.length; i++) {
        mover = movers[i]
        k_point(mover)
        deltax = randomGaussian(0,10)
        deltay = randomGaussian(0,10)
        newPoint = [mover[0] + deltax, mover[1] + deltay]
        while(Math.pow(newPoint[0] - circleCenterX, 2) + Math.pow(newPoint[1] - circleCenterY, 2) > Math.pow(circleRadius, 2)) {
            deltax = randomGaussian(0,5)
            deltay = randomGaussian(0,5)
            newPoint = [mover[0] + deltax, mover[1] + deltay]
        }
        changeStroke(i)
        k_point(newPoint)
        //k_line(mover, newPoint)
        movers[i] = newPoint
    }
};