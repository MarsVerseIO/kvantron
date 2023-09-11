Установка<br>
1. npm install<br>
2. node app.js<br>
<br>
Либо через Docker:<br>
1. docker build . -t kvantron<br>
2. docker run -p 3000:3000 kvantron<br>
<br>
Примеры curl:<br>
1. Установить парметры для героя<br>
  curl -X POST http://localhost:3000/setHeroStats -H "Content-Type: application/json" -d '{ "name": "Hero1", "strength": 111, "dexterity": 222, "intellect": 333, "isInvincible": true }'<br>
2. Получить параметры героя<br>
  curl -X GET http://localhost:3000/getHeroStats<br>
3. Загрузить картинку героя<br>
  curl -X POST http://localhost:3000/uploadHeroImage -F image=@/путь/до/картинки/image.png -H "Content-Type: multipart/form-data"<br>
4. Получить картинку героя:<br>
  curl -X GET http://localhost:3000/getHeroImage > image.png<br>
