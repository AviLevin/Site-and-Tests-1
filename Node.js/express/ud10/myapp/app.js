const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.render('home.ejs'))






app.get('/:thing', function (req, res) {

    var thing = req.params.thing;

    res.send('love.ejs' , {thingvar=thing})
  })

app.listen(port, () => console.log(`Example app listening on port ${port}!`))