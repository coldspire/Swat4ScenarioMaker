const missionTemplatePara1 = `
    Okay guys, listen up. OCID (Organized Crime Investigation Division) has spent a lot of time setting this one up, 
    and they’ve asked for our help serving the arrest warrant. 
    For the last two weeks, the Food Wall Restaurant has been under close surveillance. 
    We believe the owner, one Lian Niu, an experienced gunsmith, deals in the illegal modification of firearms,
    in this case, fabricating custom high-volume magazines.
    Niu maintains a residence above the restaurant, and does his business there.
    He’s been questioned about illegal arms before, but walked.
`;

const missionTemplatePara2 = `
    Ten minutes ago, Detective Sheary sighted Alex Jimenez entering the restaurant. 
    Look at your files; Alex Jimenez, also known as “The Knife,” is a hit man with Colombian connections. 
    He’s a key suspect in multiple homicides over the last year and half. 
    Jimenez should be considered armed and dangerous.
`;

const missionTemplatePara3 = `
    Sheary believes that Jimenez is presently inside the business, 
    having modifications made to a MAC-10 submachine gun used in a recent homicide. 
    We want the evidence intact, so we can’t give Jimenez and Niu any warning. 
    The restaurant’s patrons and employees will still be in the building when you go in. 
    As always, target ID.
`;

const missionTemplatePara4 = `
    Your first priority is, of course, to avoid any civilian injuries; 
    but after that, secure the gun in Jimenez’s possession. 
    OCID is looking forward to having a long talk with both Jimenez and Niu — 
    and that gun is just the thing to make them chatty. 
    So take a careful look at the floor plans, plan your entry, and gear up.
`;

export function getMission() {
  return [
    missionTemplatePara1,
    missionTemplatePara2,
    missionTemplatePara3,
    missionTemplatePara4
  ];
}
