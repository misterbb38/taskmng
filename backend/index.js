const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Importation de CORS
const app = express();

// Configuration des variables d'environnement
require('dotenv').config();
const PORT = process.env.PORT;

// Connexion à la base de données
require('./db.js');

// Middleware pour le traitement du JSON
app.use(bodyParser.json());

// Activation de CORS pour toutes les routes
app.use(cors());

// Routes
const userRoutes = require('./routes/userRoutes.js');
const taskRoutes = require('./routes/taskRoutes.js');
app.use('/users', userRoutes);
app.use('/tasks', taskRoutes);

// Route racine
app.get('/', (req, res) => {
    res.json({ message: 'Task management API fonctionne' });
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Écoute au port ${PORT}`);
});
