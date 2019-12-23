function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

let t = 0
let stopTime = 1500
let canvWidth = window.innerWidth
let canvHeight = window.innerHeight

let circleRadius = canvHeight / 3
let circleCenterX = canvWidth / 2
let circleCenterY = canvHeight / 2
let n_movers = 3
let moverStartPos = [circleCenterX, circleCenterY]
let movers = []
let strokeColors = []
let hue = getRandomArbitrary(10, 90)
let strokeColorInitial = [hue, 100, 100]
for(i = 0; i < n_movers; i++) {
    movers.push(moverStartPos)
    strokeColors.push(strokeColorInitial)
}
console.log("Initialised strokeColors")
console.log(strokeColors)
console.log(movers)

function k_point(vec) {
    point(vec[0], vec[1])
}

function k_line(vec1, vec2) {
    line(vec1[0], vec1[1], vec2[0], vec2[1])
}

function changeStroke(i) {
    strokeWeight(randomGaussian(4,7))
    stroke(strokeColors[i][0], strokeColors[i][1], strokeColors[i][2])
    console.log("Current stroke:")
    console.log(strokeColors[i])
}

function setup() {
    createCanvas(canvWidth, canvHeight)
    background(255,255,255)
    stroke(255,255,255)
    circle(circleCenterX, circleCenterY, 2 * circleRadius)
    stroke(0,0,0)
    strokeWeight(3)
    console.log("Color randomness, initial hue: " + hue)
    newColors = []
    for(i = 0; i < strokeColors.length; i++) {
        hue_noise = randomGaussian(0, 50)
        new_hue = (strokeColors[i][0] + hue_noise) % 100
        newColors.push([new_hue, 100, 100])
    }
    console.log("After noise ")
    strokeColors = newColors
    console.log(strokeColors)
    console.log(newColors)
    colorMode(HSB, 100)
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
        console.log("Calling change stroke " + i)
        console.log("All colors:")
        console.log(strokeColors)
        changeStroke(i)
        k_point(newPoint)
        //k_line(mover, newPoint)
        movers[i] = newPoint
    }
};