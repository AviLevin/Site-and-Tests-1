

$(document).ready(function () {



// show all      ====================================================  ///

    $("#btnAll").on("click", function () {

        $.ajax({
            url: "https://restcountries.eu/rest/v2/all",
            success: function (response) {

                console.log(response);


                response.forEach(function (element) {
                    $("#landArea").append(`
                    <div class="card col-sm-3 new1">
                    <img src="${element.flag}" height="42" width="42" >
                        <div class="card-body">
                            <h4 class="card-title"> ${element.name}</h4>
                            <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>topLevelDomain:</strong> </font>  ${element.topLevelDomain}   </p>

                              <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>capital:</strong> </font>  ${element.capital}   </p>
                              
                              <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>currencies:</strong> </font>  ${element.currencies[0].name} <br> <font color="blue"> <strong>symbol:</strong> </font> ${element.currencies[0].symbol}  </p>
                              
                            
                        </div>
                    </div>`
                    );
                });


            }
        });
    });





    // search countries   // 



    $("#input1").on('keyup', function () {
        $("#landArea").html("");

        $.ajax({
            url: "https://restcountries.eu/rest/v2/name/"  + $("#input1").val(),
            success: function (response) {

                console.log(response);


                response.forEach(function (element) {
                    $("#landArea").append(`
                    <div class="card col-sm-3 new1">
                    <img src="${element.flag}" height="42" width="42" >
                        <div class="card-body">
                            <h4 class="card-title"> ${element.name}</h4>
                            <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>topLevelDomain:</strong> </font>  ${element.topLevelDomain}   </p>

                              <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>capital:</strong> </font>  ${element.capital}   </p>
                              
                              <p class="card-text" style="border:1px; border-style:solid; border-color:green; padding: 0.5em;"> 
                              <font color="blue"> <strong>currencies:</strong> </font>  ${element.currencies[0].name} <br> <font color="blue"> <strong>symbol:</strong> </font> ${element.currencies[0].symbol}  </p>
                              
                            
                        </div>
                    </div>`
                    );
                });


            }
        });
    });









});

