

function loadDoc() {


    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        // document.getElementById("demo").innerHTML =
        post = this.responseText;  = ============================================

        response = JSON.parse(this.response);
        console.log(response);
        response.forEach(element => {
            document.getElementById("blog").innerHTML += `
             <h2> ${element.title}</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div class="fakeimg">Fake Image</div>
            <p></p>
            <p><a href="site14.html?id=${element.id}"> read more ..!!!!!</a></p>
            <p>${element.body}</p>`;
           
        });


      
    //   } else { 
    //   document.getElementById("demo").innerHTML= "lo lo lo!!!";
    //   }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }}