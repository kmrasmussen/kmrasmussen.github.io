function randfloat(min, max) {
    return Math.random() * (max - min) + min;
}

function randint(min, max) {
    return Math.round(randfloat(min, max))
}

function sortAscending(myArray) {
    myArray.sort(function(a, b){return a-b});
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

function wrappingAvg(theta1, theta2, max) {
    if(theta1 < theta2) {

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

let PHI = 1.61803398
let TWORAD = 2 * Math.PI
let canvWidth = window.innerWidth * 0.95
let canvHeight = window.innerHeight * 0.95
let maxRadius = null
let middle = null

let treeDepth = 3 //randint(4, 10)
let mean_n_children = 10
let variance_n_children = 5

let hue = randfloat(10, 90)
let title = 'hej'

let tree = []

function setup() {
    createCanvas(canvWidth, canvHeight)
    //colorMode(HSB, 100)
    maxRadius = min(canvWidth, canvHeight) * 0.45
    middle = [canvWidth / 2, canvHeight / 2]
    strokeWeight(10)
    tree = normalTree(treeDepth, mean_n_children, variance_n_children)
    noLoop()
}

let traverseTree = (tree, beginning, end, previousNode) => {
    if(tree.children.length < 2) {
        //console.log("Stopping")
        return 0
    }
    var radius = (min(canvHeight, canvWidth) / (1.2 * tree.height))
    
    var window = end - beginning
    if(beginning > end) {
        var partA = TWORAD - beginning
        window = partA + end
    }
    //console.log("Beginning: " + beginning + " End: " + end + " Window: " + window)

    var x = (treeDepth - tree.height) + 1
    var thetas = []
    var thetaBorders = []
    var thetaOffset = randfloat(beginning, end)
    for(var i = 0; i < tree.children.length; i++) {
        var theta = (beginning + ((thetaOffset + i * PHI * (window / TWORAD)) % window)) % TWORAD // randfloat(beginning, end)
        thetas.push(theta)
    }
    sortAscending(thetas)
    //console.log("Thetas: " + thetas)
    for(var i = 1; i < thetas.length; i++) {
        thetaBorder = (beginning + (((thetas[i - 1] + thetas[i]) / 2)) % window) % TWORAD
        thetaBorders.push(thetaBorder)
    }
    thetaBorders.push(((thetas[thetas.length - 1] + TWORAD + thetas[0]) / 2) % window)
    //sortAscending(thetaBorders)
    //console.log("Borders: " + thetaBorders)

    console.log("Traversing this tree")
    console.log(tree)
    console.log("Beginning: " + beginning + " End: " + end + " Window: " + window)
    console.log("Thetas: " + thetas)
    console.log("Theta-borders: " + thetaBorders)

    stroke(0,0,0)
    var nodes = []
    for(var i = 0; i < thetas.length; i++) {
        var nodeX = middle[0] + radius * Math.cos(thetas[i])
        var nodeY = middle[1] + radius * Math.sin(thetas[i])
        var node = [nodeX, nodeY]
        nodes.push(node)
        strokeWeight(5)
        k_point(node)
        strokeWeight(2)
        k_line(previousNode, node)
    }

    /*
    stroke(255, 0, 0)
    for(var i = 0; i < thetaBorders.length; i++) {
        var nodeX = middle[0] + 1000 * Math.cos(thetaBorders[i])
        var nodeY = middle[1] + 1000 * Math.sin(thetaBorders[i])
        var borderPoint = [nodeX, nodeY]
        k_line(middle, borderPoint)
    }
    stroke(0, 0, 0)
    */

    //print("Theta last: " + thetas[thetaBorders.length - 1])
    //print("Theta0 border 1: " + thetaBorders[thetaBorders.length - 2])
    //print("Theta0 border 2: " + thetaBorders[thetaBorders.length - 1])
    traverseTree(tree.children[0], thetaBorders[thetaBorders.length - 1], thetaBorders[0], nodes[0]) 

    for(var i = 1; i < tree.children.length; i++) {
        var node = nodes[i]
        if(tree.children[i].children.length > 0) {
            
            var newBeginning = thetaBorders[i - 1]
            var newEnd = thetaBorders[i]
            console.log("Call trav: Beginning: " + newBeginning + " End: " + newEnd)
            traverseTree(tree.children[i], newBeginning, newEnd, node)
        } 
    }

    return 1;
}

function draw() {
    clear()
    k_point(middle)
    traverseTree(tree, 0, 2 * Math.PI, middle)
}