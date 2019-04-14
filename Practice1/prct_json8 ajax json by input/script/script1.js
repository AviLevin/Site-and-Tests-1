
$(document).ready(function () {





    $("#getSingle").on("click", function () {
        $.ajax({
            url: "https://jsonplaceholder.typicode.com/users/" + $("#userId").val(),
            type: "GET",
            success: function (response) {
                console.log(response);

                

                $("#allUsers").html(`
                        <div class="card col-sm-3">
                            <div class="card-body">
                                <h4 class="card-title">${response.name}</h4>
                                
                            </div>
                        </div>`
                );

            }
        });
    });






});
