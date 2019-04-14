

$(document).ready(function () {



    $.ajax({
        url: "https://jsonplaceholder.typicode.com/users",
        success: function (response) {
            
            console.log(response);


            response.forEach(function (element) {
                $("#landArea").append(`
                    <div class="card col-sm-3">
                       
                        <div class="card-body">
                            <h4 class="card-title">${element.name}</h4>
                            <p class="card-text"> ${element.email} </p>
                            <a href="#" class="btn btn-primary">${element.id}</a>
                        </div>
                    </div>`
                );
            });


        }
    });





    // alert("dd");
});

