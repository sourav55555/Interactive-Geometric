// utility function(1) for create area value element
function displayArea(name,areaValue){
    const ol = document.getElementById("display-area");

    const li = document.createElement("li");

    const p1 = document.createElement("p");
    p1.innerHTML = `${areaValue}cm<sup>2</sup>`;

    const p2 = document.createElement("p");
    p2.innerText = name;

    const button = document.createElement("button");
    button.innerHTML = "Convert to m<sup>2</sup>";

    li.appendChild(p2);
    li.appendChild(p1);
    li.appendChild(button);

    ol.appendChild(li);

}


// utility function(2) for get numeric value from inputs
function inputToInt(idName){
    const id = document.getElementById(idName);
    const value = parseFloat(id.value).toFixed(2);
    return value;
}

// utility function(3) for get numeric value from inner-text
function textToInt(idName){
    const id = document.getElementById(idName);
    const value = parseFloat(id.innerText).toFixed(2);
    return value;
}


// triangle area with utility function(1) & (2)
document.getElementById("triangle-button").addEventListener("click", function(){
    const b = inputToInt("triangle-b");
    const h = inputToInt("triangle-h");

    const triArea = .5*b*h;

    displayArea("Triangle",triArea);
})

// Rectangle area with utility function(1) & (2)
document.getElementById("rectangle-button").addEventListener("click", function(){
    const w = inputToInt("rectangle-w");
    const l = inputToInt("rectangle-l");

    const rectArea = w*l;

    displayArea("Rectangle",rectArea);
})

// parallelogram area with utility function(1) & (3)
document.getElementById("parallelogram-button").addEventListener("click", function(){
    const b1 = textToInt("parallelogram-b");
    const h1 = textToInt("parallelogram-h");
   
    const paraArea = b1 * h1;

    displayArea("Parallelo.", paraArea);

})

// rhombus area with utility function(1) & (3)
document.getElementById("rhombus-button").addEventListener("click", function(){
    const d1 = textToInt("rhombus-d1");
    const d2 = textToInt("rhombus-d2");
   
    const rhomArea = 0.5 * d1 * d2;
    
    displayArea("Rhombus", rhomArea);

})

// ellipse area with utility function(1) & (3)
document.getElementById("ellipse-button").addEventListener("click", function(){
    const a = textToInt("ellipse-a");
    const b = textToInt("ellipse-b");
   
    const ellipseArea = 3.14 * a * b;
    
    displayArea("Ellipse", ellipseArea);

})

// pentagon area with utility function(1) & (3)
document.getElementById("pentagon-button").addEventListener("click", function(){
    const p = textToInt("pentagon-p");
    const b = textToInt("pentagon-b");
   
    const pentagonArea = 0.5 * p * b;
    
    displayArea("pentagon", pentagonArea);

})