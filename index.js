// for triangle
let serial = 0;
document.getElementById("btn-triangle").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
    const title = document.getElementById("triangle-title").innerText;

    // get input values
    const base = parseFloat(document.getElementById("triangle-inp1").value);
    const height = parseFloat(document.getElementById("triangle-inp2").value);
    // check if input values are valid numbers
    if (isNaN(base) || isNaN(height)) {
        alert("Please enter valid numerical values for the base and height of the triangle.");
        return;
    }
    // calculate area and update display
    const area = 0.5 * base * height;
    const areaString = area.toFixed(2) + " cm\u00B2";
    //document.getElementById("area-calculation").textContent = `Area (A) = ${area.toFixed(2)} cm\u00B2`;

    // show thw data
    displayData(title, areaString)

    // clear the input value
    document.getElementById("triangle-inp1").value = '';
    document.getElementById("triangle-inp2").value = '';

});

// for rectangle
document.getElementById("btn-rectangle").addEventListener("click", function () {
    serial += 1;
    // get the data from html using id
    const title = document.getElementById("rectangle-title").innerText;

    // get input values
    const width = parseFloat(document.getElementById("rectangle-inp1").value);
    const length = parseFloat(document.getElementById("rectangle-inp2").value);

    // check if input values are valid numbers
    if (isNaN(width) || isNaN(length)) {
        alert("Please enter valid numerical values for the width and height of the triangle.");
        return;
    }
    // calculate area and update display
    const area = width * length;
    const areaString = area.toFixed(2) + " cm\u00B2";

    // show thw data
    displayData(title, areaString)

    // clear the input value
    document.getElementById("rectangle-inp1").value = '';
    document.getElementById("rectangle-inp2").value = '';

});



// for parallelogram
document.getElementById("btn-parallelogram").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("parallelogram-title").innerText;

    // Get the base and height elements from the HTML
    // base
    const baseElement = document.getElementById("base1").innerText;
    const baseNumber = parseFloat(baseElement);

    // height
    const heightElement = document.getElementById("height1").innerText;
    const heightNumber = parseFloat(heightElement);

    // calculate area and update display
    const area = baseNumber * heightNumber;
    const areaString = area.toFixed(2) + " cm\u00B2";

    // show the data
    displayData(title, areaString);

});

// for rhombus
document.getElementById("btn-rhombus").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("rhombus-title").innerText;

    // Get the base and height elements from the HTML
    // base
    const distanceOne = document.getElementById("distance1").innerText;
    const distanceOneNumber = parseFloat(distanceOne);

    // height
    const distanceTwo = document.getElementById("distance2").innerText;
    const distanceTwoNumber = parseFloat(distanceTwo);

    // calculate area and update display
    const area = 0.5 * distanceOneNumber * distanceTwoNumber;
    const areaString = area.toFixed(2) + " cm\u00B2";

    // show the data
    displayData(title, areaString);

});



// for pentagon
document.getElementById("btn-pentagon").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("pentagon-title").innerText;

    // Get the base and height elements from the HTML
    // base
    const pentagonDistance = document.getElementById("pentagon-distance").innerText;
    const pentagonDistanceNumber = parseFloat(pentagonDistance);

    // height
    const pentagonBase = document.getElementById("pentagon-base").innerText;
    const pentagonBaseNumber = parseFloat(pentagonBase);

    // calculate area and update display
    const area = 0.5 * pentagonDistanceNumber * pentagonBaseNumber;
    const areaString = area.toFixed(2) + " cm\u00B2";

    // show the data
    displayData(title, areaString);

});


// for ellipse:
document.getElementById("btn-ellipse").addEventListener("click", function () {
    serial += 1;
    const title = document.getElementById("ellipse-title").innerText;

    // Get the base and height elements from the HTML
    // a-axis
    const ellipseAxisA = document.getElementById("a-axis").innerText;
    const ellipseAxisNumberA = parseFloat(ellipseAxisA);

    // b-axis
    const ellipseAxisB = document.getElementById("b-axis").innerText;
    const ellipseAxisNumberB = parseFloat(ellipseAxisB);

    // calculate area and update display
    const area = Math.PI * ellipseAxisNumberA * ellipseAxisNumberB;
    const areaString = area.toFixed(2) + " cm\u00B2";

    // show the data
    displayData(title, areaString);

});


// common function for display the data
function displayData(title, areaString) {
    const container = document.getElementById("table-container");

    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${serial}</td>
    <td>${title}</td>
    <td>${areaString}</td>
    `
    container.appendChild(tr);
}

