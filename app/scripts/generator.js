/**
 * Get a new player directive. Will not return a previously-picked directive.
 */
function generatePlayerDirective() {
    // TODO: To be replaced with cool stuff
    return Math.round(Math.random() * 10); 
}

/**
 * Generates X number of player-based directives, plus a wild-card directive.
 */
export function generateAll(numPlayers) {
    // TODO: To be replaced with actual cool stuff
    const dummyData = [];
    for (var idx = 0; idx < numPlayers; idx++) {
        dummyData.push(generatePlayerDirective());
    }
    dummyData.push('X'); // Wild-card temp data
    return dummyData;
};
