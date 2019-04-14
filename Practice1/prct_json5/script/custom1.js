

function loadEmplo() {

    var url = "http://api.myjson.com/bins/ztbpm"

    $.get(url, function (data, status) {
        if (status == "success") {
            response = data;


            for (let index = 0; index < response.d.results.length; index++) {

                document.getElementById("landDest").innerHTML += `      
                <div class='new1' > <h2>${response.d.results[index].Title}</h2> 
                <h3>${response.d.results[index].city}</h3></div>`;

                // console.log(response.d.results[index].Title);
            }
        }
    });
}