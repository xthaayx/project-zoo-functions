const data = require('../data/zoo_data');
const { prices } = require('../data/zoo_data');

function countEntrants(entrants) {
  // seu código aqui!
  return entrants.reduce((acumulador, numero) => {
    if (numero.age < 18) {
      return { ...acumulador, child: acumulador.child + 1 };
    } if (numero.age < 50 && numero.age > 17) {
      return { ...acumulador, adult: acumulador.adult + 1 };
    } if (numero.age >= 50) {
      return { ...acumulador, senior: acumulador.senior + 1 };
    }
    return { ...acumulador };
  }, { child: 0, adult: 0, senior: 0 });
}

function calculateEntry(entrants) {
  // seu código aqui
  if (!entrants || !Object.keys(entrants).length) {
    return 0;
  }
  return (prices.child * countEntrants(entrants).child)
  + (prices.adult * countEntrants(entrants).adult)
  + (prices.senior * countEntrants(entrants).senior);
}

module.exports = { calculateEntry, countEntrants };
