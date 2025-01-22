require('dotenv').config(); // Charger les variables d'environnement

const express = require('express');
const cors = require('cors');
const router = require('./routes');

const app = express();
app.use(cors());

app.use(router);

// Utilisez les variables d'environnement avec une valeur par défaut
const baseUrl = process.env.BASE_URL || 'http://localhost:3000';
console.log(`Magic happens on ${baseUrl}`);

// Exporter comme fonction serverless
module.exports = app;