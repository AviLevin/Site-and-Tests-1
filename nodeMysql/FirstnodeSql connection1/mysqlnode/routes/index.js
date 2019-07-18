var express = require('express');
var router = express.Router();
var mysql = require('../services/mysql')

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET all countries. */
router.get('/countries', function (req, res, next) {
    mysql.query('SELECT * FROM countries;', function (err, rows, fields) {
        if (err) throw err
        console.log(rows);
        res.render('countries', { title: 'Countries dfsdf d dssfsffsd', countries: rows });
    })
});


router.get('/cities', function (req, res, next) {
    mysql.query('SELECT cities.id, cities.name as cityname, countries.name as countryname FROM cities INNER JOIN countries ON cities.country_id = countries.id ORDER BY cities.id limit 5000;', function (err, rows, fields) {
        if (err) throw err
        console.log(rows);
        res.render('cities', { title: 'Cities', cities: rows });
    })
});


module.exports = router;
