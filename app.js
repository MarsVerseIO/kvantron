const express = require("express");
const app = express();

const { heroDataValidate } = require("./hero.validation");
const controller = require("./hero.controller.js");
const fileUpload = require("express-fileupload");

app.use(express.json());
app.use(
  fileUpload({
    createParentPath: true,
    limits: {
        fileSize: 1024 * 1024 // 1 MB
    },
    abortOnLimit: true
  })
);

app.post('/setHeroStats', heroDataValidate, controller.setHeroStats);
app.get("/getHeroStats", controller.getHeroStats);
app.post("/uploadHeroImage", controller.uploadHeroImage);
app.get("/getHeroImage", controller.getHeroImage);


app.listen(3000, function(){
  console.log("The server is waiting for connection...");
});