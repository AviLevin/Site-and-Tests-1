


$(document).ready(function () {

    // sortable

    $("tbody").sortable();

    // btn save

    $("#btn-save-2").click(function () {
        alert();
    })


    // index id and gender

    $("tr").each(function (i) {
        if (i == 0) {
            $(this).prepend(`<th>ID</th>`);
            $(this).append(`<th>Gender</th>`);
            $(this).append(`<th>Actions</th>`);

        } else {
            $(this).prepend(`<td>${i}</td>`);
            $(this).append(` 
             <td> 
            <div id="gender${i} " class="form-group">
                <select class="form-control" id="sel1">
                    <option>Male</option>
                    <option>Female</option>
                </select>
            </div>
        </td>
        `);

            $(this).append(`
            <td>
                <button type="button" class="btn btn-primary editrow">Edit</button>
                <button type="button" class="btn btn-warning deleterow">Delete</button>
            </td>    
        `);
        }
    });


    //  remove on click

    $("body").on("click", ".deleterow", function () {
        $(this).parents("tr").remove();
    });



    // add button


    $("#btn-add-top").click(function () {
        
    });

    $("#insertDataToTable").click(function () {
        var tr = $("tbody tr:last-child").clone();
        tr.find("td")[0].innerText = $("tbody tr").length + 1;
        tr.find("td")[1].innerText = $("#fullname").val();
        tr.find("td")[2].innerText = $("#age").val();
        $("#fullname").val("");
        $("#age").val("");
        $("tbody").append(tr);
        $('#addModal').modal('hide')

    });




    $("#btn-save-top, #btn-save-bottom").click(function () {
        var tableData = [];
        $("tbody tr").each(function (index) {
            tableData[index] = {};
            tableData[index].id = $(this).find( "td" )[0].innerText;
            tableData[index].fullName = $(this).find( "td" )[1].innerText;
            tableData[index].age = $(this).find( "td" )[2].innerText;
            tableData[index].gender = $(this).find( "select option:selected").text();
        });
        
        localStorage.setItem("tableData", JSON.stringify(tableData));
           
    })





});







