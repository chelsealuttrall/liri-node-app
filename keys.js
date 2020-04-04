console.log('keys are loaded');
require("dotenv").config();


exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET

};

exports.bandsInTown = {
    app_ID: process.env.app_ID
};

exports.OMDb = {
    key: process.env.Key
};