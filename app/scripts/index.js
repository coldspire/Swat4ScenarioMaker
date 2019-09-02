const playerDirectives = require('../assets/json/playerOptions.json');
const wildcards = require('../assets/json/wildcardOptions.json');

function getPlayerDirectives() {
    return playerDirectives;
}

function getWildcards() {
    return wildcards;
}

function getRandomIndex(max) {
    return (Math.floor(Math.random() * (max + 1)));
}

function getDirectives(numPlayers, unique) {
    const playerDirectives = getPlayerDirectives();
    const wildcards = getWildcards();

    const chosenDirectives = [];
    for (let i = 0; i < numPlayers; i++) {
        let directiveIdx = null;
        do {
            directiveIdx = getRandomIndex(numPlayers);
        } while (unique && chosenDirectives.includes(playerDirectives[directiveIdx]));

        chosenDirectives.push(playerDirectives[directiveIdx]);
    }

    const wildcardIdx = getRandomIndex(wildcards.length - 1);
    const wildcard = wildcards[wildcardIdx];

    return { 
        directives: {
            perPlayer: chosenDirectives,
            isUnique: unique || false
        },
        wildcard
    };
};

function changeTextById(text, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = text;
    }
};

const directives = getDirectives(2, false);
changeTextById(directives.directives.perPlayer[0], "playerOneDirective");
changeTextById(directives.directives.perPlayer[1], "playerTwoDirective");
changeTextById(directives.wildcard, "wildcardDirective");
