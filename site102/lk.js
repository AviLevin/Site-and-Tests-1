

var checkBoxAge, checkBoxColor, colorVal, ageVal;
function showInput() {
     checkBoxColor = document.getElementById("colorCheck");
    var colorInputGroup = document.getElementById("colorInputGroup");

    if (checkBoxColor.checked == true){
        colorInputGroup.style.display = "block";
    } else {
        colorInputGroup.style.display = "none";
    }


     checkBoxAge = document.getElementById("ageCheck");
    var ageInputGroup = document.getElementById("ageInputGroup");

    if (checkBoxAge.checked == true){
        ageInputGroup.style.display = "block";
    } else {
        ageInputGroup.style.display = "none";
    }
}


function showBtn() {
    var buttonGroup = document.getElementById("btnGroup");
     colorVal = document.getElementById("color").value;
     ageVal = document.getElementById("age").value;
    
    if (checkBoxAge.checked == true && checkBoxColor.checked == true && colorVal != "" && ageVal != "") {
        buttonGroup.style.display = "block";
    } else {
        buttonGroup.style.display = "none";
    }
    
}

function output() {
    document.getElementById("colorOutput").style.backgroundColor = colorVal;
    document.getElementById("ageOutput").innerText = ageVal;
}