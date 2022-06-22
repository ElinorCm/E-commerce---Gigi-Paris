// Toujours commencer par importer les variables d'environnement !
require("dotenv").config();

const express = require("express");

const session = require("express-session");

const errorController = require("./app/controllers/errorController");

// on importe le router
const router = require("./app/router");

// un peu de config
const SERVER_PORT = process.env.SERVER_PORT || 4001;


const app = express();



// Initialisation des vues
app.set("view engine", "ejs");
app.set("views", `${__dirname}/app/views`);

// servir les fichiers statiques qui sont dans "integration"
app.use(express.static(`${__dirname}/public`));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: {}
}));

app.use((request, response, next) => {
  app.locals = { currentPage: request.url };
  next();
});

// routage !
app.use(router);

app.use((request, response) => {
  errorController._404(request, response);
});


// on lance le serveur
app.listen(SERVER_PORT, () => {
  // callback exécuté une fois que le port est sur écoute
  console.log(`Server is running on: http://localhost:${SERVER_PORT}`);
});
