const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPath = path.join(__dirname, '/../data/vacance.json');

function ajouterLieuVacance(nomLieu, descriptionLieu) {
  const toutLieuVacance = parse(jsonDbPath);
  const newVacance = {
    id: getNextId(),
    nomLieu,
    descriptionLieu,
  };
  toutLieuVacance.push(newVacance);
  serialize(jsonDbPath, toutLieuVacance);
  return newVacance.id;
}

function getNextId() {
  const toutLieuVacance = parse(jsonDbPath);
  const lastItemIndex = toutLieuVacance?.length !== 0 ? toutLieuVacance.length - 1 : undefined;
  if (lastItemIndex === undefined) return 1;
  const lastId = toutLieuVacance[lastItemIndex]?.id;
  const nextId = lastId + 1;
  return nextId;
}

module.exports = {
  ajouterLieuVacance,
};
