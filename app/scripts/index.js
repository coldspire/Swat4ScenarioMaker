const playerDirectives = [ ...require('../assets/json/playerOptions.json')];
const wildcards = [ ...require('../assets/json/wildcardOptions.json')];

function getPlayerDirectives(nonLethal) {
    let directives;
    if (nonLethal) {
        directives = playerDirectives.filter(dir => !dir.lethal);
    } else {
        directives = playerDirectives;
    }

    return directives;
}

function getWildcards(nonLethal) {
    let directives;
    if (nonLethal) {
        directives = wildcards.filter(dir => !dir.lethal);
    } else {
        directives = wildcards;
    }

    return directives;
}

function getRandomIndex(max) {
    return (Math.floor(Math.random() * (max + 1)));
}

function getDirectives(numPlayers, unique, nonLethal) {
    const playerDirectives = getPlayerDirectives(nonLethal);
    const wildcards = getWildcards(nonLethal);

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

function refreshAll() {
    const isUnique = document.getElementById('is-unique').checked;
    const isNonLethal = document.getElementById('is-nonlethal').checked;

    const directives = getDirectives(2, isUnique, isNonLethal);

    changeTextById(directives.directives.perPlayer[0].text, "playerOneDirective");
    changeTextById(directives.directives.perPlayer[1].text, "playerTwoDirective");
    changeTextById(directives.wildcard.text, "wildcardDirective");
}

document.getElementById('is-unique').addEventListener('change', refreshAll);
document.getElementById('is-nonlethal').addEventListener('change', refreshAll);

refreshAll();