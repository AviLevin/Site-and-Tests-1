$(document).ready(function () {
    $("#addForm").on("submit", function (e) {
        alert("add");
        // e.preventDefault();
    })

    $("#editForm").on("submit", function (e) {
        alert("edit is edited");
        // e.preventDefault();
    })

    $("#registerForm").on("submit", function (e) {
        alert("edit");
        e.preventDefault(); 
    })

    $("#loginForm").on("submit", function (e) {
        alert("edit");
        e.preventDefault();
    })

})
