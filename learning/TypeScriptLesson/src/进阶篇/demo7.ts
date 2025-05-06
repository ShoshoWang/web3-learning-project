interface Cat {
  name: string;
}
const bobTheCat: Cat = {
  name: 'Bob',
};

// function printCatName(cat: Cat) {
//   console.log(cat.name);
// }

function printCatName(this: Cat) {
  console.log(this.name);
}

// function printCatName() {
//   console.log(this.name);
// }
printCatName.apply(bobTheCat);
// printCatName(bobTheCat);
// console.log('printCatNam', printCatName.apply(bobTheCat));
