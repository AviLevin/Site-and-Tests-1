$(document).ready(function () {





    $.getJSON('https://jsonplaceholder.typicode.com/users' + $("#userId").val(),
        function (data) {
            
                console.log(data);
                

            for (let index = 0; index <data.length; index++) {
                var text = `<div class="card col-sm-3">
                    
        <div class="card-body">
            <h4 class="card-title">${data[].name}</h4>
            
        </div>
    </div>`


            $(".mypanel").html(text);
                
            }
           
        });




});