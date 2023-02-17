// utility function for create area value element
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


// utility function for get integer value from inputs
function inputToInt(idName){
    const id = document.getElementById(idName);
    const value = parseFloat(id.value).toFixed(2);
    return value;
}

document.getElementById("triangle-button").addEventListener("click", function(){
    const b = inputToInt("triangle-b");
    const h = inputToInt("triangle-h");

    const triArea = .5*b*h;

    displayArea("Triangle",triArea);

})