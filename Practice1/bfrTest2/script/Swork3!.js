
$(document).ready(function () {

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


    });


});
