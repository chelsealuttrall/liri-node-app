require("dotenv").config();
const moment = require('moment');
const axios = require('axios').default;
const keys = require("./keys.js");

const fs = require('fs');

//spotify stuff
const Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
let songQuery = '';
var commands = process.argv.slice(2);
// console.log('commands:', commands);

//concert this stuff
//const BandsInTownEvents = require('bandsintown-events')
//var Events = new BandsInTownEvents();

var artistName = '';
var commands = process.argv.slice(2);


//movie this stuff
var movieName = '';
var commands = process.argv.slice(2);

//do what it says stuff
function iSaidDoIt() {

    fs.readFile("./random.txt", "utf8", function(error, data) {
        if (error) {
            return console.log(error);
        }
        console.log(data);
        //I'm missing something that runs it after I print it. But I need to move on. 
    })
};


//different commands
switch (commands[0]) {
    case 'spotify-this-song': //this one isn't working quite right either.
        console.log(commands[1]);
        songQuery = commands[1];
        spotify
            .search({ type: 'track', query: songQuery, limit: 1 })
            .then(function(response) {
                console.log(response.tracks.items[0].artists[0]);

            })
            .catch(function(err) {
                console.log(err);
            });
        break;
    case 'concert-this':
        console.log("Liri is searching for the next concert")
        console.log(commands[1]);
        artistName = commands[1];
        var queryURL = "https://rest.bandsintown.com/artists/" + artistName + "/events?app_id=" + keys.bandsInTown.app_ID;
        console.log(queryURL + "\r\n");

        axios.get(queryURL).then(
            function(response) {
                console.log("Venue: " + response.data[0].venue.name + "\r\n");
                console.log("City: " + response.data[0].venue.city + "\r\n");
                console.log(moment(response.data[0].datetime).format("MM/DD/YYYY") + "\r\n");
            }
        );
        break;
    case 'movie-this':
        console.log("Liri is searching for info on that movie.")
        console.log(commands[1]);
        movieName = commands[1];
        var queryURL = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=" + keys.OMDb.key;
        console.log(queryURL + "\r\n");

        axios.get(queryURL).then(
            function(response) {
                console.log("Title: " + response.data.Title);
                console.log("Year: " + response.data.Year);
                console.log("Rated: " + response.data.imdbRating);
                console.log("Plot: " + response.data.Plot);
                console.log("Actors: " + response.data.Actors);
                console.log("Rotten Tomatoes: " + response.data.Ratings[1].Value);
            }
        );
        break;
    case 'do-what-it-says':
        iSaidDoIt();
        break;

    default:
        console.log('Sorry, I don\'t know how to do that.')
};




// To retrieve the data that will power this app, you'll need to 
//send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. 
//You'll find these Node packages crucial for your assignment.