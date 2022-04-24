const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

const resultAnimals = {};

function countAnimals(animal) {
  // seu código aqui
  if (animal === undefined) {
    species.forEach((specie) => {
      resultAnimals[specie.name] = specie.residents.length;
    });
    return resultAnimals;
  } if (animal.sex === undefined) {
    return species.find((animals) => animals.name === animal.specie).residents.length;
  } if (animal.specie && animal.sex) {
    const animalGender = species.find((specie) =>
      specie.name === animal.specie).residents.filter((residente) => animal.sex === residente.sex);
    return animalGender.length;
  }
}

module.exports = countAnimals;
