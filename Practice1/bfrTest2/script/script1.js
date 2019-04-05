





    

       
    alert("ss");




$(document).ready(function () {

    $("tbody").sortable();

    var url = "https://jsonplaceholder.typicode.com/users"

    $.get(url, function (data, status) {
        if (status == "success") {
            response = data;
            $.each(result, function (i, field) {
                usersData = '<tr>    <td> ' + ${ field.name } + '</td>     </tr>';
    
            });
            $('#myTable').append(usersData);
        });

    


            // for (let index = 0; index < response.length; index++) {


                $("tr").each(function (index) {
                    if (index == 0) {
                        $(this).prepend(`<th>ID</th>`);
                        $(this).append(`<th>Gender</th>`);
                        $(this).append(`<th>Actions</th>`);
                    } else {
                        $(this).prepend(`<td>${index}</td>`);
                        $(this).append(`
                        <td>
                            <select class="form-control" id="gender${index}">
                                <option></option>
                                <option>Male</option>
                                <option>Female</option>
                            </select>
                        </td>
                    `);
            
                        $(this).append(`
                        <td>
                            <button type="button" class="btn btn-warning editrow">Edit</button>
                            <button type="button" class="btn btn-danger deleterow">Delete</button>
                        </td>    
                    `);

                    document.getElementById("myTable").innerHTML +=`<tr>    <td>  ${response[index].name} </td>     </tr>`;



            
                    }
                });
               

                // console.log(response.d.results[index].Title);
            // }
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
      td = tr[i].getElementsByTagName("td")[1];
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


