var express = require('express')
var app = express()
var port = 3000

app.get('/', (req, res) => res.send('Hello World!   - - - -  HOME page'))




app.get("/speak/:animal", function (req, res) {

    var sounds = {
        cow: "moooooo",
        cat: "mmmiiiiooowowwwwww",
        dog: "woffffffff woooofff",
    }


    var animal = req.params.animal;
    var sound = sounds[animal];

    res.send("the " + animal + " says " + sound + "")
  })



  app.get('/repeat/:message/:times', function (req, res) {

    var message = req.params.message;
    var times  = Number( req.params.times);
    var result = "";

    for (let index = 0; index < times; index++) {
        result += message +" ";
        
    }


    res.send(result)
  })





  app.get('*', function (req, res) {
    res.send('sory 0n 404')
  })    


  app.listen(port, () => console.log(`Example app listening on port ${port}!`))