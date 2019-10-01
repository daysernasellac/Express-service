const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const pug = require("pug")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(__dirname + '/public'))

app.set('view engine', 'pug');
app.set('views', __dirname + '/public/')

app.get('/', function(req, res){
    res.render('index', {
        title: 'Registro',
        people: {}
    });
});

app.get('/consulta', function(req, res){
    res.render('consulta', {
        nombre: 'Alex',
        apellido: 'Higuita',
        email: 'alex.higuita@gmail.com',
        telefono: '478512687',
        nacimiento: '15/11/1999',
        genero: 'hombre',
        people: {}
    });
});

app.post('/registro', function(req, res){
    console.log(req.body)
    res.render('consulta', {
        nombre: req.body.fullname,
        apellido: req.body.apellidos,
        email: req.body.email,
        telefono: req.body.phonenumber,
        nacimiento: req.body.birthdate,
        genero: req.body.genre,
        people: {}
    });
});

app.listen(5050, function(){
    console.log("start")
})

