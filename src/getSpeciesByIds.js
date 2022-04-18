const data = require('../data/zoo_data');
const { species } = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  // seu código aqui
  const result = [];
  for (let index = 0; index < ids.length; index += 1) {
    species.filter((specie) => specie.id === ids[index]);
    result.push(species[index]);
  }
  if (ids.length === 1) {
    return species.filter((specie) => specie.id === ids[0]);
  }
  return result;
}
module.exports = getSpeciesByIds;
