
$(document).ready(function () {


    $("#myTable").sortable();

   



    var url = "https://jsonplaceholder.typicode.com/users"

    $.get(url, function (data, status) {

        
        if (status == "success") {
            response = data;


            for (let index = 0; index < response.length; index++) {

                document.getElementById("myTable").innerHTML += `<tr>    <td>  ${response[index].name} </td> 
                 <td>  ${response[index].address.city} </td>      </tr>`;

                // console.log(response.d.results[index].Title);
            }
        }






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

            }


            
        });






        $("body").on("click", ".deleterow", function () {
            // $(this).parent().parent().remove();     
            $(this).parents("tr").remove();
            // console.log($(this))
        });

       



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

