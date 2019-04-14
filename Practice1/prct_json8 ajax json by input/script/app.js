
$(document).ready(function () {





    $("#getSingle").on("click", function () {
        $.ajax({
            url: "https://reqres.in/api/users/" + $("#userId").val(),
            type: "GET",
            success: function (response) {
                console.log(response);

                ajaxData = {
                    url: "https://swapi.co/api/people/" + response.data.id,
                    type: "GET",
                    success: function (response) {
                        console.log(response);
                    }
                };

                $.ajax(ajaxData);

                $("#allUsers").html(`
                        <div class="card col-sm-3">
                            <img class="card-img-top" src="${response.data.avatar}" alt="Card image" style="width:100%">
                            <div class="card-body">
                                <h4 class="card-title">${response.data.first_name}</h4>
                                <p class="card-text">Some example text some example text. John Doe is an ${response.data.last_name} and engineer</p>
                                <a href="#" class="btn btn-primary">${response.data.id}</a>
                            </div>
                        </div>`
                );

            }
        });
    });






});
