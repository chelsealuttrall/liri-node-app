js
require("dotenv").config();

js
var keys = require("./keys.js");

js
var spotify = new Spotify(keys.spotify);




// To retrieve the data that will power this app, you'll need to 
//send requests using the `axios` package to the Bands in Town, Spotify and OMDB APIs. 
//You'll find these Node packages crucial for your assignment.

// * [Node-Spotify-API](https://www.npmjs.com/package/node-spotify-api)

// * [Axios](https://www.npmjs.com/package/axios)

//   * You'll use Axios to grab data from the [OMDB API](http://www.omdbapi.com) and the [Bands In Town API](http://www.artists.bandsintown.com/bandsintown-api)

// * [Moment](https://www.npmjs.com/package/moment)

// * [DotEnv](https://www.npmjs.com/package/dotenv)



// ### Instructions




/
// 5. Make a file called `random.txt`.

//    * Inside of `random.txt` put the following in with no extra characters or white space:

//      * spotify-this-song,"I Want it That Way"

// 6. Make a JavaScript file named `liri.js`.

// 7. At the top of the `liri.js` file, add code to read and set any environment variables with the dotenv package:

// ```js
// require("dotenv").config();
// ```

// 8. Add the code required to import the `keys.js` file and store it in a variable.

// ```js
//   var keys = require("./keys.js");
// ```

// * You should then be able to access your keys information like so

//   ```js
//   var spotify = new Spotify(keys.spotify);
//   ```

// 9. Make it so liri.js can take in one of the following commands:

//    * `concert-this`

//    * `spotify-this-song`

//    * `movie-this`

//    * `do-what-it-says`