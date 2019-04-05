
$(document).ready(function () {

    var url = "https://jsonplaceholder.typicode.com/users"

    $.get(url, function (data, status) {
        if (status == "success") {
            response = data;


            for (let index = 0; index < response.length; index++) {

                document.getElementById("myTable").innerHTML +=`<tr>    <td>  ${response[index].name} </td> 
                 <td>  ${response[index].address.city} </td>      </tr>`;

                // console.log(response.d.results[index].Title);
            }
        }
    });



    

    
});
