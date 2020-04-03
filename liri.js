require("dotenv").config();



const axios = require('axios').default;

var keys = require("./keys.js");

//spotify stuff
var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);
let songQuery = '';
var commands = process.argv.slice(2);
console.log('commands:', commands);
//concert this stuff
var BandsInTownEvents = require('bandsintown-events')
var Events = new BandsInTownEvents();

var artistName = '';
var commands = process.argv.slice(2);

//movie this stuff


//do what it says stuff


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
        console.log(commands[1]);
        artistName = commands[1];
        Events.setParams({
            "app_id": keys.bandsInTown.app_ID,
            "artists": [artistName]
        });
        Events.getEvents(function(events) {
            for (var i = 0; i < events.length; i++) {
                console.log(events[i].venue.city + ", " + events[i].venue.region);
                // console.log(JSON.stringify(events, null, 2))
            }
        }, function(errors) {
            console.log(errors);
        });
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