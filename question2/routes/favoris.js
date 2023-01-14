const express = require('express');
const { ajouterlieuFavori } = require('../models/favori');

const router = express.Router();

router.post('/ajoutFavori', (req, res) => {
  const idUtilisateur = req?.body?.idUtilisateur?.length !== 0 ? req.body.idUtilisateur : undefined;
  const idLieu = req?.body?.idLieu?.length !== 0 ? req.body.idLieu : undefined;

  if (!idUtilisateur || !idLieu) return res.sendStatus(400); // 400 Bad Request

  const newFavori = ajouterlieuFavori(idUtilisateur, idLieu);

  if (!newFavori) return res.sendStatus(409); // 409 Conflict

  return res.json(newFavori);
});

module.exports = router;
