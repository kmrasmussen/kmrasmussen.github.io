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

let n_points = null
let all_points_drawn = false
let n_points_drawn = 0

let nodes = []

let nodeIndexA = 0
let nodeIndexB = 1

let probOfConnection = null

let hue = randint(10, 90)
let title = 'Erdős–Rényi'

function setup() {
    createCanvas(canvWidth, canvHeight)
    probOfConnection = Math.round(randomGaussian(50, 20))
    colorMode(HSB, 100)
    
    strokeWeight(20)
    frameRate(10)
    n_points = randomGaussian(13, 3)

    noStroke()
    fill(hue, 30, 100);
    textFont("Courier");
    titleHeight = textWidth(title);
    if(canvWidth < canvHeight) {
        titleSize = canvWidth / 4
        textSize(canvWidth / 10)
        fill(hue, 30, 70);
        text("θ = ." + probOfConnection, 0, canvHeight * 0.95)
        rotate(HALF_PI);
        textSize(titleSize)
        text("Rényi", 0, -0.2 * titleSize)
        text("Erdős–", 0, -1.2 * titleSize)
    } else {
        textSize(canvHeight / 4)
        text(title, 0, canvHeight / 2)
        textSize(canvHeight / 10)
        fill(hue, 30, 70);
        text("θ = ." + probOfConnection, 0, canvHeight * 0.70)
    }
    
    

    
    frameRate(randomGaussian(60,10))

    blendMode(DIFFERENCE)
}

function draw() {
    if(n_points_drawn < n_points) {
        nodeSize = randomGaussian(20, 4)
        strokeWeight(nodeSize)
        nodeColor = [hue + randomGaussian(0, 10), 100 - abs(randomGaussian(0, 10)), 50 + randomGaussian(0, 10)]
        k_stroke(nodeColor)
        nodeX = randomGaussian(canvWidth / 2, canvWidth / 4)
        while(nodeX < canvWidth / 8 || nodeX > canvWidth - (canvWidth / 8)) {
            nodeX = randomGaussian(canvWidth / 2, canvWidth / 4)
        }
        nodeY = randomGaussian(canvHeight / 2, canvHeight / 4)
        while(nodeY < canvHeight / 8 || nodeY > canvHeight - (canvHeight / 8)) {
            nodeY = randomGaussian(canvHeight / 2, canvHeight / 4)
        }
        node = [nodeX, nodeY, nodeColor, nodeSize]
        nodes.push(node)
        k_point(node)
        n_points_drawn++
    } else {
        strokeWeight(2)
        if(nodeIndexB >= n_points) {
            nodeIndexA++
            nodeIndexB = nodeIndexA + 1
            if(nodeIndexA >= n_points) {
                noLoop()
            }
        } else {
            x = randint(0, 100)
            if(x < probOfConnection) {
                nodeAsize = nodes[nodeIndexA][3]
                nodeBsize = nodes[nodeIndexB][3]
                nodeAcolor = nodes[nodeIndexA][2]
                nodeBcolor = nodes[nodeIndexB][2]
                linkHue = (nodeAcolor[0] + nodeBcolor[0]) / 2
                linkSaturation = (nodeAcolor[1] + nodeBcolor[1]) / 2
                linkBrightness = (nodeAcolor[2] + nodeBcolor[2]) / 2
                stroke(linkHue, linkSaturation, linkBrightness)
                k_line(nodes[nodeIndexA], nodes[nodeIndexB])
            }
            
            nodeIndexB++
        }
    }
}