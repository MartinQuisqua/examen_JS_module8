const path = require('node:path');
const { parse, serialize } = require('../utils/json');

const jsonDbPathUser = path.join(__dirname, '/../data/users.json');
const jsonDbPathVacance = path.join(__dirname, '/../data/vacance.json');
const jsonDbPathFavori = path.join(__dirname, '/../data/favori.json');

function ajouterlieuFavori(idNomUtilisateur, idlieuUtilisateur) {
  const userfound = retrouverUser(idNomUtilisateur);
  const vacanceFound = retrouverVacance(idlieuUtilisateur);
  if (!userfound || !vacanceFound) return undefined;
  const favori = parse(jsonDbPathFavori);
  // JE verifie si un user à déja ce favori
  for (let index = 0; index < favori.length; index += 1) {
    if (favori[index].idUtilisateur === idNomUtilisateur) {
      if (favori[index].idVacance === idlieuUtilisateur) {
        return undefined;
      }
    }
  }
  if (favori[userfound].idUtilisateur === idlieuUtilisateur) {
    return undefined;
  }
  const newFavori = {
    idUtilisateur: idNomUtilisateur,
    idVacance: idlieuUtilisateur,
  };
  favori.push(newFavori);
  serialize(jsonDbPathFavori, favori);
  return newFavori;
}

function retrouverUser(idUser) {
  const users = parse(jsonDbPathUser);
  const indexOfUserFound = users.findIndex((user) => user.id == idUser);
  if (indexOfUserFound < 0) return undefined;
  return indexOfUserFound;
}

function retrouverVacance(idVacance) {
  const vacance = parse(jsonDbPathVacance);
  const indexOfUserFound = vacance.findIndex((index) => index.id == idVacance);
  if (indexOfUserFound < 0) return undefined;
  return vacance[indexOfUserFound];
}

module.exports = {
  ajouterlieuFavori,
};
