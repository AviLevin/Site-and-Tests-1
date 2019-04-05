

var toDoList = [];

function loadTasks() {
    if (localStorage.getItem('myList') != undefined) {
        toDoList = JSON.parse(localStorage.getItem('myList'));
        output();
    }
}

function addTask() {
    var task = {}
    task.title = document.getElementById("taskTitle").value;
    task.date = document.getElementById("dateTask").value;
    task.time = document.getElementById("timeTask").value;
    toDoList.unshift(task);
    document.getElementById("taskTitle").value = "";
    document.getElementById("dateTask").value = "";
    document.getElementById("timeTask").value = "";
    output();
    localStorage.setItem('myList', JSON.stringify(toDoList));

}

function output() {
    var output = "";
    for (var key in toDoList) {
        output += "<div class='new1' id=" +
            key + "> <button class='btn close' onclick='removeTask()'><i class='fa fa-close iconX'></i></button><p class='titleScroller'>" +
            toDoList[key].title +
            "</p> &nbsp;<p   &nbsp; class='footer1'>" +
            toDoList[key].date +
            "</p> &nbsp;<p &nbsp; class='footer2'>" +
            toDoList[key].time +
            " </p></div>";
    }
    document.getElementById("newElementEntry").innerHTML = output;
}

function removeTask() {
    var taskToRemove = event.target.parentNode.parentNode;
    var taskRemoveStorage = taskToRemove.id;
    // taskToRemove.remove();
    toDoList.splice(taskRemoveStorage, 1);
    localStorage.setItem('myList', JSON.stringify(toDoList));
    output();
}



function myFadeIn() {
    var fade = document.getElementById("0");
    fade.style.opacity = "0";

    setTimeout(function () {
        fade.style.transition = "all 2s ease-out";
        fade.style.opacity = "1";
    }, 100);

}
 