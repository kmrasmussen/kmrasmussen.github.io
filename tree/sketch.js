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
let maxWidth = null
let middle = null

let treeDepth = randint(4, 10)
let mean_n_children = randint(2, 5)
let variance_n_children = randint(1, 4)

let hue = randfloat(10, 90)
let title = 'hej'

let orginalBrightness = 10
let currentBrightness = null
let originalSaturation = 50

let tree = []

function setup() {
    createCanvas(canvWidth, canvHeight)
    //colorMode(HSB, 100)
    //stroke(hue, originalSaturation, orginalBrightness)
    maxRadius = min(canvWidth, canvHeight) * 0.45
    maxWidth = maxRadius * 0.1
    middle = [canvWidth / 2, canvHeight / 2]
    //strokeWeight(10)
    tree = normalTree(treeDepth, mean_n_children, variance_n_children)
    noLoop()
}

let traverseTree = (tree, beginning, end, previousNode) => {
    if(tree.children.length < 2) {
        //console.log("Stopping")
        return 0
    }
    var radius = null // (min(canvHeight, canvWidth) / (1.2 * tree.height))
    var depth = treeDepth - tree.height + 1
    radius = maxRadius * (Math.sin(0.5 * Math.PI * (depth / (treeDepth - 1))))
    var width = maxWidth / Math.pow(2, depth)

    currentBrightness = 100 - (100 / Math.pow(2, depth))
    //stroke(hue, originalSaturation, currentBrightness)
    
    var window = end - beginning
    if(beginning > end) {
        var partA = TWORAD - beginning
        window = partA + end
    }
    //console.log("Beginning: " + beginning + " End: " + end + " Window: " + window)

    var x = (treeDepth - tree.height) + 1
    var thetas = []
    var thetaBorders = []
    var thetaOffset = null
    if(beginning < end) {
        thetaOffset = 0 // randint(beginning, end)
    } else {
        thetaOffset = 0
    }
    
    for(var i = 0; i < tree.children.length; i++) {
        var theta = (beginning + ((thetaOffset + i * PHI * (window / TWORAD)) % window))% TWORAD // randfloat(beginning, end)
        theta = (beginning + ((thetaOffset + beginning + (i) * ((PHI) * (window / TWORAD))) % window)) % TWORAD
        thetas.push(theta)
    }
    sortAscending(thetas)
    //console.log("Thetas: " + thetas)
    if(tree.height == treeDepth) {
        for(var i = 1; i < thetas.length; i++) {
            thetaBorder = (beginning + (((thetas[i - 1] + thetas[i]) / 2)) % window) % TWORAD
            thetaBorders.push(thetaBorder)
        }
        thetaBorders.push(((thetas[thetas.length - 1] + TWORAD + thetas[0]) / 2) % window)
    } else {
        for(var i = 1; i < thetas.length; i++) {
            thetaBorder = ((thetas[i - 1] + thetas[i]) / 2) % TWORAD
            thetaBorders.push(thetaBorder)
        }
        thetaBorders.push(end)
    }
    //sortAscending(thetaBorders)
    //console.log("Borders: " + thetaBorders)

    /*
    console.log("Traversing this tree")
    console.log(tree)
    console.log("Beginning: " + beginning + " End: " + end + " Window: " + window)
    console.log("Thetas: " + thetas)
    console.log("Theta-borders: " + thetaBorders)
    */

    var nodes = []
    for(var i = 0; i < thetas.length; i++) {
        var nodeX = middle[0] + radius * Math.cos(thetas[i])
        var nodeY = middle[1] + radius * Math.sin(thetas[i])
        var node = [nodeX, nodeY]
        nodes.push(node)
        //strokeWeight(4)
        //k_point(node)
        strokeWeight(1)
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

    /*
    if(tree.height == treeDepth) {
        print("Theta last: " + thetas[thetaBorders.length - 1])
        var myBeginning = thetaBorders[thetaBorders.length - 2]
        var myEnd = thetaBorders[thetaBorders.length - 1]
        print("Theta last borer 1: " + myBeginning)
        print("Theta last border 2: " + myEnd)
        traverseTree(tree.children[0], myBeginning, myEnd, nodes[0]) 
    } else {
        print("Theta last: " + thetas[thetaBorders.length - 1])
        var myBeginning = thetaBorders[thetaBorders.length - 2]
        var myEnd = end
        print("Theta last borer 1: " + myBeginning)
        print("Theta last border 2: " + myEnd)
        traverseTree(tree.children[0], myBeginning, myEnd, nodes[0]) 
    }
    */
    /*
    if(tree.height == treeDepth) {
        traverseTree(tree.children[0], thetaBorders[thetaBorders.length - 1], thetaBorders[0], nodes[0])
    } else {
        traverseTree(tree.children[0], thetaBorders[0], end, nodes[0])
    }
    */

    for(var i = 1; i < tree.children.length; i++) {
        var node = nodes[i]
        if(tree.children[i].children.length > 0) {
            var newBeginning = thetaBorders[i - 1]
            var newEnd = thetaBorders[i]
            //console.log("Call trav: Beginning: " + newBeginning + " End: " + newEnd)
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