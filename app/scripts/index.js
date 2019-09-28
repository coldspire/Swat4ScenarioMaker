const playerDirectives = [ ...require('../assets/json/playerOptions.json')];
const wildcards = [ ...require('../assets/json/wildcardOptions.json')];
const locations = [ ...require('../assets/json/locations.json')];

import '../styles/index.css';

function getAllPlayerDirectives(nonLethal) {
    let directives;
    if (nonLethal) {
        directives = playerDirectives.filter(dir => !dir.lethal);
    } else {
        directives = playerDirectives;
    }

    return directives;
}

function getAllWildCards(nonLethal) {
    let directives;
    if (nonLethal) {
        directives = wildcards.filter(dir => !dir.lethal);
    } else {
        directives = wildcards;
    }

    return directives;
}

function getAllLocations(includeUnpreferred) {
    let locs;
    if (includeUnpreferred) {
        locs = locations.filter(loc => loc.preferred !== null);
    } else {
        locs = locations.filter(loc => loc.preferred);
    }
    
    return locs;
}

function getRandomIndex(max) {
    return (Math.floor(Math.random() * (max + 1)));
}

function pickPlayerDirectives(numPlayers, unique, nonLethal) {
    const playerDirectives = getAllPlayerDirectives(nonLethal);

    const chosenDirectives = [];
    for (let i = 0; i < numPlayers; i++) {
        let directiveIdx = null;
        do {
            directiveIdx = getRandomIndex(numPlayers);
        } while (unique && chosenDirectives.includes(playerDirectives[directiveIdx]));

        chosenDirectives.push(playerDirectives[directiveIdx]);
    }

    return { 
        player: chosenDirectives,
        isUnique: unique || false
    };
};

function pickWildcard() {
    const wildcardsAll = getAllWildCards();
    const wildcardIdx = getRandomIndex(wildcards.length - 1);
    const wildcard = wildcardsAll[wildcardIdx];

    return wildcard;
}

function pickLocation() {
    const locationsAll = getAllLocations();
    const location = locationsAll[getRandomIndex(locationsAll.length - 1)];

    return location;
}

function changeTextById(text, elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.innerText = text;
    }
};

export function refreshDirectives() {
    const isUnique = document.getElementById('is-unique').checked;
    const isNonLethal = document.getElementById('is-nonlethal').checked;

    const directives = pickPlayerDirectives(2, isUnique, isNonLethal);
    const wildcard = pickWildcard(isNonLethal);

    changeTextById(directives.player[0].text, "playerOneDirective");
    changeTextById(directives.player[1].text, "playerTwoDirective");
    changeTextById(wildcard.text, "wildcardDirective");
}

export function refreshLocation(event) {
    const onlyPreferredLocations = document.getElementById('only-preferred-locations').checked;

    const location = pickLocation(onlyPreferredLocations);

    changeTextById(location.description, "location");
}

export function refreshAll() {
    refreshDirectives();
    refreshLocation();
}

document.getElementById('is-unique').addEventListener('change', refreshDirectives);
document.getElementById('is-nonlethal').addEventListener('change', refreshDirectives);
document.getElementById('only-preferred-locations').addEventListener('change', refreshLocation);