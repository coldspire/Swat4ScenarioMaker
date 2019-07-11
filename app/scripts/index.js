import { generateAll } from './generator.js';

var getGenerated = function(numPlayers) {
    console.log(generateAll(numPlayers));
}

getGenerated(2);
