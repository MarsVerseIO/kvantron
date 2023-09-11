const fs = require("fs");

function GetHero() {
    try {
        return JSON.parse(fs.readFileSync("./Hero.json", "utf8"));
      } catch (err) {
        return {};
    }
}

function SetHero(hero) {
    try {
        fs.writeFileSync("./Hero.json", JSON.stringify(hero));
        return true;
      } catch (err) {
        return false;
    }
}

module.exports = { GetHero, SetHero };