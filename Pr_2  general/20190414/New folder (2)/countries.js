$(document).ready(function () {



    $.ajax({
        url: "https://restcountries.eu/rest/v2/all",
        success: function (result) {
            console.log(result);
            result.forEach(element => {
                allCurDis = pleaseCurrenciesDisplay(element.currencies);
                $(".all").append(`
                
                    <div class="card col-sm-3">
                        <img class="card-img-top" src="${element.flag}" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">${element.name}</h4>
                            <p class="card-text">${allCurDis}</p>
                            <a href="#" class="btn btn-primary">Currenciiiieess</a>
                        </div>
                    </div>

                
                
                
                
                `);
            });
        }
    });


});



function pleaseCurrenciesDisplay (currencies){
    allCurDis = "";
    currencies.forEach((e , i) => {
        allCurDis +=  "<p>" + e.name + " " +  e.code + " " + e.symbol;
        if(i != currencies.length-1) {
            allCurDis += " <br>"
        } else if(currencies.name == "null" ) {
            allCurDis += "";
        } else {
            allCurDis += "! ";
        }
        allCurDis +=  "</p>";

    });

    return allCurDis;

}