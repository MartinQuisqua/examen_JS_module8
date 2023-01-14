const express = require('express');
const { ajouterLieuVacance } = require('../models/vacances');

const router = express.Router();

/* GET users listing. */
router.post('/ajoutLieu', (req, res) => {
  const lieu = req?.body?.lieu?.length !== 0 ? req.body.lieu : undefined;
  const description = req?.body?.description?.length !== 0 ? req.body.description : undefined;

  if (!lieu || !description) return res.sendStatus(400); // 400 Bad Request

  const vacance = ajouterLieuVacance(lieu, description);

  if (!vacance) return res.sendStatus(409); // 409 Conflict

  return res.json(vacance);
});

module.exports = router;
