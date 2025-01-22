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
  app.listen(port, () => console.log(`Magic happens on ${baseUrl}`));
}

// Exporter pour les fonctions serverless (Vercel)
module.exports = app;