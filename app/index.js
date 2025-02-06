require('dotenv').config();
const express = require('express');
const cors = require('cors');

const router = require('./routes');

const app = express();
app.use(cors());
app.use(router);

const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

// Si lancé en local, démarrer le serveur
if (require.main === module) {
  app.listen(port, () => console.log(`Magic happens on ${baseUrl} or http://localhost:${port}`));
}

// Route pour la racine de l'API
app.get('/', (req, res) => {
    res.send(
    '<h1>Possible endpoints</h1>' +
    '<p>This project includes four endpoints that you will be able to use:</p>' +
    '<ul>' +
    '<li><b>http://localhost:3000/user/${userId}</b> - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day\'s score (todayScore) and key data (calorie, macronutrient, etc.).</li>' +
    '<li><b>http://localhost:3000/user/${userId}/activity</b> - retrieves a user\'s activity day by day with kilograms and calories.</li>' +
    '<li><b>http://localhost:3000/user/${userId}/average-sessions</b> - retrieves the average sessions of a user per day. The week starts on Monday.</li>' +
    '<li><b>http://localhost:3000/user/${userId}/performance</b> - retrieves a user\'s performance (energy, endurance, etc.).</li>' +
    '</ul>' +
    '<p>Warning, currently only two users have been mocked. They have userId 12 and 18 respectively.</p>' +
    '<h1>Examples of queries</h1>' +
    '<ul>' +
    '<li><b>http://localhost:3000/user/12/performance</b> - Retrieves the performance of the user with id 12</li>' +
    '<li><b>http://localhost:3000/user/18</b> - Retrieves user 18\'s main information.</li>' +
    '</ul>'+
    '<br>' +
    '<h4>Warning, if you use the online API, change <u>http://localhost:3000</u> by <u>https://p12-sport-see-back-oc.vercel.app</u></h4>'
    );
  });

// Exporter pour les fonctions serverless (Vercel)
module.exports = app;