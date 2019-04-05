


          function showGo() {
            var radius = document.getElementById("radius").value;
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.arc(200, 200, radius, 0, 02 * Math.PI);
            ctx.stroke();
            document.getElementById("myCanvas").innerText = radius;
            console.log("check");

            // validate is NaN

            var x = document.getElementById("radius").value;
            if (isNaN(x)) {
              alert("Must insert numbers!  try again!");
              return false;
            }


            // validate circle not outside canvas

            var y = document.getElementById("radius").value;
            if (y > 200) {
              alert("the circle TOO BIG!!    please try again!");
              return false;
            }


          }



          // clear the canvas

          function clearCanvas() {

            // Use the identity matrix while clearing the canvas
            var c = document.getElementById("myCanvas");
            var ctx = c.getContext("2d");
            ctx.beginPath();
            ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);
            ctx.restore();
          }





          // calculate the volume

          function volume_sphere() {
            var volume;
            var radius = document.getElementById('radius').value;
            radius = Math.abs(radius);
            volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
            volume = volume.toFixed(4);
            document.getElementById('volume').value = volume;
            return false;
          }
          window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;




