import { getCriminalFillins } from '../assets/mission/criminals';

const timespan = 'two months';

const policeOrg = {
  abbrev: 'OCID',
  full: 'Organized Crime Investigation Division',
};

const niceity =
  `Okay guys, listen up. ${policeOrg.abbrev} (${policeOrg.full}) has spent a lot of time setting this one up, and they’ve asked for our help serving the arrest warrant.`;

const locationName = {
  properName: 'Food Wall',
  buildingType: 'restaurant',
  buildingOther: 'residence',
};

const weapon = {
  generic: 'gun',
  specific: 'MAC-10 submachine gun',
  plural: 'firearms',
  pluralShort: 'arms',
  accessory: 'high-volume magazines',
};

const detectiveName = {
  first: 'Detective',
  last: 'Sheary',
  get full() {
    return `${this.first} ${this.last}`;
  },
};

const { criminalNameA, criminalNameB, crime } = getCriminalFillins();

const exitComment = 'So take a careful look at the floor plans, plan your entry, and gear up.';

const missionTemplatePara1 = `
    ${niceity}
    For the last ${timespan}, the ${locationName.properName} ${locationName.buildingType} has been under close surveillance. 
    We believe the owner, one ${criminalNameA.full}, an experienced ${weapon.generic}smith, deals in the illegal modification of ${weapon.plural},
    in this case, fabricating custom ${weapon.accessory}.
    ${criminalNameA.last} maintains a ${locationName.buildingOther} above the ${locationName.buildingType}, and does his business there.
    He’s been questioned about illegal ${weapon.pluralShort} before, but walked.
`;

const missionTemplatePara2 = `
    Ten minutes ago, ${detectiveName.full} sighted ${criminalNameB.full} entering the ${locationName.buildingType}. 
    Look at your files; ${criminalNameB.full}, also known as “${criminalNameB.nickname},” is a ${criminalNameB.profession} with ${criminalNameB.nationality} connections. 
    He’s a key suspect in multiple ${crime.plural} over the last year and half. 
    ${criminalNameB.last} should be considered ${criminalNameB.descriptors.first} and ${criminalNameB.descriptors.second}.
`;

const missionTemplatePara3 = `
    ${detectiveName.last} believes that ${criminalNameB.last} is presently inside the business, 
    having modifications made to a ${weapon.specific} used in a recent ${crime.singular}. 
    We want the evidence intact, so we can’t give ${criminalNameB.last} and ${criminalNameA.last} any warning. 
    The ${locationName.buildingType}’s patrons and employees will still be in the building when you go in. 
    As always, target ID.
`;

const missionTemplatePara4 = `
    Your first priority is, of course, to avoid any civilian injuries; 
    but after that, secure the ${weapon.generic} in ${criminalNameB.last}’s possession. 
    ${policeOrg.abbrev} is looking forward to having a long talk with both ${criminalNameB.last} and ${criminalNameA.last} — 
    and that ${weapon.generic} is just the thing to make them chatty. 
    ${exitComment}
`;

export function getMission() {
  return [missionTemplatePara1, missionTemplatePara2, missionTemplatePara3, missionTemplatePara4];
}