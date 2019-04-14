

$(document).ready(function () {



    $.ajax({
        url: "https://reqres.in/api/users?page=2",
        success: function (response) {
            
            console.log(response);


            response.data.forEach(function (element) {
                $("#landArea").append(`
                    <div class="card col-sm-3">
                        <img class="card-img-top" src="${element.avatar}" alt="Card image" style="width:100%">
                        <div class="card-body">
                            <h4 class="card-title">${element.first_name} ${element.last_name}</h4>
                            <p class="card-text"> ss </p>
                            <a href="#" class="btn btn-primary">${element.id}</a>
                        </div>
                    </div>`
                );
            });


        }
    });





    // alert("dd");
});

