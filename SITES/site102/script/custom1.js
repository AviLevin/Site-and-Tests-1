



function showInput() {
    var colorCheck = document.getElementById("colorCheck");
    var colorInput = document.getElementById("colorInput");
    if (colorCheck.checked == true) {
        colorInput.style.display = "block";
    } else {
        colorInput.style.display = "none";
        
    }

    var ageCheck = document.getElementById("ageCheck");
    var ageInput = document.getElementById("ageInput");
    if (ageCheck.checked == true) {
        ageInput.style.display = "block";
    } else {
        ageInput.style.display = "none";
    }
}




function showBtn() {
    var showGo = document.getElementById("showGo");
     colorVal = document.getElementById("colorVal").value;
     ageVal = document.getElementById("ageVal").value;
    
    if (colorCheck.checked == true && ageCheck.checked == true && colorVal != "" && ageVal != "") {
        showGo.style.display = "block";
    } else {
        showGo.style.display = "none";
    }
    
}


function output() {
    document.getElementById("colorOutput").style.backgroundColor = colorVal;
    document.getElementById("ageOutput").innerText = ageVal;
}



