// utility function(1) for create area value element
function displayArea(name,areaValue){

    if( isNaN(areaValue)){
        return;
    }

    const ol = document.getElementById("display-area");

    const li = document.createElement("li");

    const p1 = document.createElement("p");
    p1.innerHTML = `${areaValue}cm<sup>2</sup>`;
    p1.setAttribute("id", `${name}p`)

    const p2 = document.createElement("p");
    p2.innerText = name;

    const button1 = document.createElement("button");
    button1.innerHTML = "Convert to m<sup>2</sup>";
    button1.setAttribute("id", `${name}Button`);

    const img = document.createElement("img");
    img.setAttribute("src", "images/cross.png");
    img.setAttribute("class", "cross");

    li.appendChild(p2);
    li.appendChild(p1);
    li.appendChild(button1);
    li.appendChild(img);

    ol.appendChild(li);

}



// utility function(2) for get numeric value from inputs
function inputToInt(idName){
    const id = document.getElementById(idName);
    const value = parseFloat(id.value).toFixed(2);
    if( value < 0){
        alert("Input Must be positive number");
    }
    else{
        return value;
    }
    
}


// utility function(3) for get numeric value from inner-text
function textToInt(idName){
    const id = document.getElementById(idName);
    const value = parseFloat(id.innerText).toFixed(2);
    return value;
}

// random colors for hover
const colors = ["#FFA07A","#FFB6C1","#FAFAD2","#D8BFD8","#ADFF2F","#E0FFFF","#FFE4E1","#C0C0C0","#2F4F4F"];

// triangle area with utility function(1) & (2)
const triangleButton = document.getElementById("triangle-button");

const triangleParent = triangleButton.parentElement;
triangleParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    triangleParent.style.background = colors[random];
})

triangleButton.addEventListener("click", function(){
    const b = inputToInt("triangle-b");
    const h = inputToInt("triangle-h");

    const triArea = .5*b*h;

    displayArea("Triangle",triArea);
    call("Triangle");
})


// Rectangle area with utility function(1) & (2)
const rectangleButton = document.getElementById("rectangle-button")

const rectangleParent = rectangleButton.parentElement;
rectangleParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    rectangleParent.style.background = colors[random];
})

rectangleButton.addEventListener("click", function(){
    const w = inputToInt("rectangle-w");
    const l = inputToInt("rectangle-l");

    const rectArea = w*l;

    displayArea("Rectangle",rectArea);
    call("Rectangle");
})


// parallelogram area with utility function(1) & (3)
const parallelogramButton = document.getElementById("parallelogram-button")

const parallelogramParent = parallelogramButton.parentElement;
parallelogramParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    parallelogramParent.style.background = colors[random];
})

parallelogramButton.addEventListener("click", function(){
    const b1 = textToInt("parallelogram-b");
    const h1 = textToInt("parallelogram-h");
   
    const paraArea = b1 * h1;

    displayArea("Parallelogram", paraArea);
    call("Parallelogram");

})


// rhombus area with utility function(1) & (3)
const rhombusButton = document.getElementById("rhombus-button");

const rhombusParent = rhombusButton.parentElement;
rhombusParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    rhombusParent.style.background = colors[random];
})

rhombusButton.addEventListener("click", function(){
    const d1 = textToInt("rhombus-d1");
    const d2 = textToInt("rhombus-d2");
   
    const rhomArea = 0.5 * d1 * d2;
    
    displayArea("Rhombus", rhomArea);
    call("Rhombus");

})


// ellipse area with utility function(1) & (3)
const ellipseButton = document.getElementById("ellipse-button");

const ellipseParent = ellipseButton.parentElement;
ellipseParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    ellipseParent.style.background = colors[random];
})

ellipseButton.addEventListener("click", function(){
    const a = textToInt("ellipse-a");
    const b = textToInt("ellipse-b");
   
    const ellipseArea = 3.14 * a * b;
    
    displayArea("Ellipse", ellipseArea);
    call("Ellipse");

})



// pentagon area with utility function(1) & (3)
const pentagonButton = document.getElementById("pentagon-button");

const pentagonParent = pentagonButton.parentElement;
pentagonParent.addEventListener("mouseenter", function(){
    const random = Math.floor(Math.random()*10);
    pentagonParent.style.background = colors[random];
})

pentagonButton.addEventListener("click", function(){
    const p = textToInt("pentagon-p");
    const b = textToInt("pentagon-b");
   
    const pentagonArea = 0.5 * p * b;
    
    displayArea("Pentagon", pentagonArea);
    call("Pentagon");

})


// utility function for set value in html
function setVal(idName , value){
    document.getElementById(idName).innerText = value;
}

//functions for edit fixed html values 
// parallelogram
document.getElementById("parallelogramEdit").addEventListener("click", function(){
    document.getElementById("parallelogram-values").style.display= "flex";
})

document.getElementById("setParallelogram").addEventListener("click", function(){

    const newValue1 = inputToInt("parallelogram-Nb");
    const newValue2 = inputToInt("parallelogram-Nh");

    if( newValue2 == null || newValue1 == null){
        return;
    }
    setVal("parallelogram-b", newValue1);
    setVal("parallelogram-h", newValue2);

    document.getElementById("parallelogram-values").style.display= "none";
})

// rhombus
document.getElementById("rhombusEdit").addEventListener("click", function(){
    document.getElementById("rhombus-values").style.display= "flex";
})

document.getElementById("setRhombus").addEventListener("click", function(){

    const newValue1 = inputToInt("rhombus-Nd1");
    const newValue2 = inputToInt("rhombus-Nd2");
    if( newValue2 == null || newValue1 == null){
        return;
    }

    setVal("rhombus-d1", newValue1);
    setVal("rhombus-d2", newValue2);

    document.getElementById("rhombus-values").style.display= "none";
})

//ellipse
document.getElementById("ellipseEdit").addEventListener("click", function(){
    document.getElementById("ellipse-values").style.display= "flex";
})

document.getElementById("setEllipse").addEventListener("click", function(){

    const newValue1 = inputToInt("ellipse-Na");
    const newValue2 = inputToInt("ellipse-Nb");
    if( newValue2 == null || newValue1 == null){
        return;
    }

    setVal("ellipse-a", newValue1);
    setVal("ellipse-b", newValue2);

    document.getElementById("ellipse-values").style.display= "none";
})

//pentagon 
document.getElementById("pentagonEdit").addEventListener("click", function(){
    document.getElementById("pentagon-values").style.display= "flex";
})

document.getElementById("setPentagon").addEventListener("click", function(){

    const newValue1 = inputToInt("pentagon-Np");
    const newValue2 = inputToInt("pentagon-Nb");
    if( newValue2 == null || newValue1 == null){
        return;
    }

    setVal("pentagon-p", newValue1);
    setVal("pentagon-b", newValue2);

    document.getElementById("pentagon-values").style.display= "none";
})


// utility function for cm2 to m2
function call(callName){
    const change = document.getElementById(`${callName}Button`);
    change.addEventListener("click", function(){
        const p = document.getElementById(`${callName}p`);
        const pVal = parseFloat(p.innerText);
        p.innerHTML = `${pVal/10000}m<sup>2</sup>`;
    });
}
