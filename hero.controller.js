const { GetHero, SetHero } = require("./hero.storage.js");
const { validationResult } = require('express-validator');

exports.setHeroStats = (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success: false, errors: errors.array() });
    }
    if (!SetHero(req.body)) {
        res.status(500).json({ success: false, err: 'try again'});
    }
    res.status(201).json({ success: true });
  } catch (err) {
    res.status(500).json({ success: false, err: err});
  }
};

exports.getHeroStats = (req, res) => {
  res.status(200).send(GetHero());
};

exports.uploadHeroImage = (req, res) => {
  if (!req.files || !req.files?.image) return res.status(400).send("No files were uploaded.");
  const file = req.files.image;
  if (file.mimetype != 'image/png') return res.status(400).send("Only .png file is available");
  const path = __dirname +"/files/avatar.png";
  file.mv(path, (err) => {
    if (err) return res.status(500).send(err);
    return res.send({ status: "success" });
  });
};

exports.getHeroImage = (req, res, next) => {
  var fileName = __dirname +'/files/avatar.png';
  res.sendFile(fileName, function (err) {
    if (err) res.status(404).json({ success: false, err: 'avatar not found'});
  })
};