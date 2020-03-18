require("dotenv").config();

const axios = require('axios').default;

var keys = require("./keys.js");

//spotify stuff
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
let songQuery = '';
var commands = process.argv.slice(2);
console.log('commands:', commands);
//conert this stuff


//movie this stuff


//do what it says stuff




switch (commands[0]) {
    case 'spotify-this-song':
        console.log(commands[1]);
        songQuery = commands[1];
        spotify
            .search({ type: 'track', query: songQuery, limit: 1 })
            .then(function(response) {
                console.log(response.tracks);

            })
            .catch(function(err) {
                console.log(err);
            });
        break;
    case 'concert-this':
        console.log(commands[1], '');
        break;
    case 'movie-this':
        console.log(commands[1], '');
    case 'do-what-it-says':
        console.log(commands[1], '');
    default:
        console.log('Sorry, I don\'t know how to do that.')
};




// To retrieve the data that will power this app, you'll need to 
//send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. 
//You'll find these Node packages crucial for your assignment.