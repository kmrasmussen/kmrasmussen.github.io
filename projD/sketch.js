function randfloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randint(min, max) {
    return Math.round(randfloat(min, max))
}

function randRGB() {
    return [randint(0,255), randint(0,255), randint(0,255)]
}

function k_stroke(colorArray) {
    stroke(colorArray[0], colorArray[1], colorArray[2])
}

function k_fill(colorArray) {
    fill(colorArray[0], colorArray[1], colorArray[2])
}

function k_point(vec) {
    point(vec[0], vec[1])
}

function k_line(vec1, vec2) {
    line(vec1[0], vec1[1], vec2[0], vec2[1])
}

function k_circle(centre, radius) {
    circle(centre[0], centre[1], 2 * radius)
}

function recursiveBinaryTree(n) {
    if(n <= 1) {
        return [[], [], "leaf"]
    } else {
        return [recursiveBinaryTree(n - 1), recursiveBinaryTree(n -1), "middle"]
    }
}

let normalTree = (depth, mean, variance) => {
    if(depth <= 1) {
        let childNode = {
            "children": [],
            "height": depth
        }
        return childNode
    } else {
        let children = []
        let n_children = abs(randomGaussian(mean, variance))
        //console.log(n_children)
        for(var i = 0; i < n_children; i++) {
            //console.log("A at depth " + depth + " and i = " + i)
            var newDepth = depth - 1
            var newMean = mean
            var newVariance = variance
            children.push(normalTree(newDepth, newMean, newVariance))
            //console.log("B at depth " + depth + " and i = " + i)
        }
        let node = {
            "children": children,
            "height": depth
        }
        return node
    }
}

function colorVariant() {
    new_hue = (hue + randomGaussian(0, 10)) % 100
    new_saturation = 100 
    new_brigthness = 100
    return [new_hue, new_saturation, new_brigthness]
}

let canvWidth = window.innerWidth * 0.95
let canvHeight = window.innerHeight * 0.95
let maxRadius = null
let middle = null

let treeDepth = randint(4, 10)
let mean_n_children = 2
let variance_n_children = 1

let hue = randfloat(10, 90)
let title = 'Erdős–Rényi'

let tree = []
let xOffset = canvWidth * 0.01
let deltax = (canvWidth - (xOffset)) / (treeDepth - 1)

function setup() {
    createCanvas(canvWidth, canvHeight)
    //colorMode(HSB, 100)
    maxRadius = min(canvWidth, canvHeight) * 0.45
    middle = [canvWidth / 2, canvHeight / 2]
    strokeWeight(3)
    noLoop()
    //noStroke()
    tree = normalTree(treeDepth, mean_n_children, variance_n_children)
    frameRate(10)
}

let traverseTree = (tree, beginning, end, previousNode) => {
    console.log("Called traverse with " + beginning + "-" + end)
    var x = (treeDepth - tree.height) + 1
    console.log("Traversal at " + x + " ")
    for(var i = 0; i < tree.children.length; i++) {
        k_stroke(randRGB())
        strokeWeight(20)
        var myX = xOffset + deltax * x
        var myY = beginning + (i + 1) * (end - beginning) / (tree.children.length + 1)
        var myPoint = [myX, myY]
        //k_point(myPoint)
        strokeWeight(1)
        k_line(previousNode, myPoint)
        var cuttoffY2 = beginning + 0.5 * ((i + 1) * (end - beginning) / (tree.children.length + 1) + (i + 1 + 1) * (end - beginning) / (tree.children.length + 1))
        var cuttoffY1 = beginning + 0.5 * ((i + 1) * (end - beginning) / (tree.children.length + 1) + (i - 1 + 1) * (end - beginning) / (tree.children.length + 1))
        //stroke(255, 0, 0)
        //strokeWeight(10)
        //point(xOffset + deltax * x, cuttoffY1)
        //point(xOffset + deltax * x, cuttoffY2)
        console.log("Calling traverse with " + cuttoffY1 + "-" + cuttoffY2)
        traverseTree(tree.children[i], cuttoffY1, cuttoffY2, myPoint)
    }
    return 1;
}

function draw() {
    clear()

    line(0, )
/*
    for(let i = 0; i < treeDepth + 1; i++) {
        line(xOffset + deltax * i, 0, xOffset + deltax * i, canvHeight)
    }
*/
    strokeWeight(10)
    adam = [xOffset, canvHeight / 2]
    //k_point(adam)
    traverseTree(tree, 0, canvHeight, adam)

    /*
    n_circles = 6
    prev_peri_points = []
    peri_points = []
    n_peri_points = 10
    for(i = 1; i < n_circles; i++) {
        //k_fill(colorVariant())
        radius = maxRadius * i / n_circles
        //strokeWeight(1)
        //k_circle(middle, radius)

        prev_peri_points = peri_points
        peri_points = []
        
        thetas = []
        for(j = 0; j < n_peri_points; j++) {
            theta = randfloat(0, 2*Math.PI)
            thetas.push(theta)
        }
        thetas.sort(function(a, b){return b-a});
        console.log(thetas)
        for (j = 0; j < thetas.length; j++) {
            theta = thetas[j]
            x = middle[0] + radius * Math.cos(theta)
            y = middle[1] + radius * Math.sin(theta)
            strokeWeight(4)
            point(x, y)
            peri_points.push([x,y])
            if(i == 1) {
                line(middle[0], middle[1], x, y)
            } else {
                line(prev_peri_points[j][0], prev_peri_points[j][1], x, y)
            }
        }
    }

    */
    //strokeWeight(10)
    //stroke(100, 100, 100)
    //point(middle)
    //k_point(middle)
}