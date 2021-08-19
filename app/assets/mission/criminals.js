
const criminalFirstNames = [
  'Lian',
  'Alex'
];

const criminalLastNames = [
  'Niu',
  'Jiminez'
];

const criminalNicknames = [
  'The Knife',
  'The Fork',
  'The Spoon'
];

const criminalProfessions = [
  'hit man',
  'hugging man'
];

const criminalDescriptors = [
  'armed',
  'dangerous',
  'cuddly'
];

const criminalNationality = [
  'Colombian',
  'American'
];

const crimes = [
  {
    singular: 'homicide',
    plural: 'homicides'
  },
  {
    singular: 'pantsing',
    plural: 'pantsings'
  }
];

export function getCriminalFillins() {
  const criminalFillins = {
    criminalNameA: {
      first: criminalFirstNames[0],
      last: criminalLastNames[0],
      nickname: criminalNicknames[1],
      get full() {
        return `${this.first} ${this.last}`;
      },
      profession: criminalProfessions[0],
      descriptors: {
        first: criminalDescriptors[0],
        second: criminalDescriptors[1]
      },
      nationality: criminalNationality[0]
    },
    criminalNameB: {
      first: criminalFirstNames[1],
      last: criminalLastNames[1],
      nickname: criminalNicknames[1],
      get full() {
        return `${this.first} ${this.last}`;
      },
      profession: criminalProfessions[1],
      descriptors: {
        first: criminalDescriptors[1],
        second: criminalDescriptors[0]
      },
      nationality: criminalNationality[1]
    },
    crime: crimes[0]
  };

  return criminalFillins;
};