import { generateAll } from './scripts/generator.js';
import './index.css';

var getGenerated = function(numPlayers) {
    console.log(generateAll(numPlayers));
};

getGenerated(2);
