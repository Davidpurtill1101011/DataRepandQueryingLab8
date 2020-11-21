const express = require('express')
const app = express()
// defining which port to host the server on.
const port = 4000
// decalring the body parser and the cors
const cors = require('cors');
const bodyParser = require('body-parser')

// adding in mongobd connections
const mongoose = require('mongoose');


// this allows you to parse the body of a http request
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

// this strConecction is used to make and send things to the mongodb
//database
const strConecction = "mongodb+srv://fredboi100:ZqVena$8@cluster0.baix3.mongodb.net/DavidsMovies?retryWrites=true&w=majority"
mongoose.connect(strConecction, {useNewUrlParser: true})
// this creates a new Schema for the db
const Schema = mongoose.Schema;
// writing stuff to the database
const movieSchema = new Schema({
    Title:String,
    Year:String,
    Poster:String
})
// making a new model for the db
const movieModel = mongoose.model('film', movieSchema);


app.use(cors());
// this USE is getting the information for the body of the html page when are using.
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/movies', (req, res) => {
    // this get method is used to get and host the content for the server and show up on the read page
    // const movives = [
    //     {
    //         "Title": "Avengers: Infinity War",
    //         "Year": "2018",
    //         "imdbID": "tt4154756",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
    //     },
    //     {
    //         "Title": "Captain America: Civil War",
    //         "Year": "2016",
    //         "imdbID": "tt3498820",
    //         "Type": "movie",
    //         "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
    //     }
    // ]

    // res.json({
    //     myMovies: movives
    // })



    movieModel.find((err, data)=>{
        res.json(data);
    })
})


app.get('/api/movies/:id',(req,res)=>{
    console.log(req.params.id);
    movieModel.findById(req.params.id, (err, data)=>{
        res.json(data);
    })
})

// posting a message that the data has been recived on the page
app.post('/api/movies', (req, res) => {
    res.send('Data recived');
    //creating movie model being pulled from http req and pushed to the server
    movieModel.create({
        Title:req.body.Title,
        Year:req.body.Year,
        Poster:req.body.Poster
    })
})
// creating the path to run the database on for mongodb
mongoose.connect('mongodb://localhost/test', { useNewUrlParser: true });


// this is a listen method to get the port the web app is been posted on.
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

