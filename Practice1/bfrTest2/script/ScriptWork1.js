



// $(document).ready(function () {

//     $.getJSON("https://jsonplaceholder.typicode.com/users", function (result) {
//         var usersData = '';

//         $.each(result, function (i, field) {
//             usersData = '<tr>    <td> ' + ${ field.name } + '</td>     </tr>';





//         });
//         $('#myTable').append(usersData);
//     });
//     alert("ss");
// });



$(document).ready(function () {

    var url = "https://jsonplaceholder.typicode.com/users"

    $.get(url, function (data, status) {
        if (status == "success") {
            response = data;


            for (let index = 0; index < response.length; index++) {

                document.getElementById("myTable").innerHTML +=`<tr>    <td>  ${response[index].name} </td>     </tr>`;

                // console.log(response.d.results[index].Title);
            }
        }
    });

    
});










function myFunction() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}
