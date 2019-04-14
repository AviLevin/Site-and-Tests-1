$(document).ready(function () {




    $("#getSingle").click(function(){


    var url =  "https://jsonplaceholder.typicode.com/users"

    $.get(url, function (data, status) {
        if (status == "success") {
              response = data;
            console.log(response);
            alert("dd");
            


            for (let index = 0; index < response.length; index++) {

                document.getElementById("allUsers").innerHTML += `      
                <div class='new1' > <h3>${response.name}</h3></div>`;

                // console.log(response.d.results[index].Title);
            }
        }
    });




});
});
