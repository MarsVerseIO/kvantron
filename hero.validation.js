const { body } = require("express-validator");

const heroDataValidate = [
  body("name")
    .exists()
    .withMessage("Name is required")
    .isString()
    .withMessage("output should be string")
    .isLength({ min: 5 })
    .withMessage("Name should be at least 5 characters"),
  body("strength")
    .exists()
    .withMessage("Strength is required")
    .isInt()
    .withMessage("Strength output should be integer"),
  body("dexterity")
    .exists()
    .withMessage("Strength is required")
    .isInt()
    .withMessage("Strength output should be integer"),
  body("intellect")
    .exists()
    .withMessage("Strength is required")
    .isInt()
    .withMessage("Strength output should be integer"),
  body("isInvincible")
    .exists()
    .withMessage("isInvincible is required")
    .isBoolean()
    .withMessage("isInvincible output should be boolen"),
  body().custom((body) => {
    const allowedKeys = [
      "name",
      "strength",
      "dexterity",
      "intellect",
      "isInvincible",
    ];
    for (const key of Object.keys(body)) {
      if (!allowedKeys.includes(key)) {
        throw new Error(`Unknown property: ${key}`);
      }
    }
    return true;
  })
];


module.exports = { heroDataValidate };