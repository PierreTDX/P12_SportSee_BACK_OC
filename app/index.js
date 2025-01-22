require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(cors());

// Utilisez les variables d'environnement avec une valeur par défaut
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL || `http://localhost:${port}`;

app.use(router);

app.listen(port, () => {
  console.log(`Magic happens on ${baseUrl}`);
});