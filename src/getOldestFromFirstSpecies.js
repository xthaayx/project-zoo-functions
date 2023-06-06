const data = require('../data/zoo_data');
const { species, employees } = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const firstEmploy = employees.find((employee) => employee.id === id).responsibleFor[0];
  const firstSpecie = species.find((specie) => specie.id === firstEmploy).residents;
  return Object.values(firstSpecie.reduce((acumulador, valor) => {
    if (acumulador.age < valor.age) {
      return valor;
    } return acumulador;
  }));
}

module.exports = getOldestFromFirstSpecies;
