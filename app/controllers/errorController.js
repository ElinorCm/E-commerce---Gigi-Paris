const errorController = {

  _403: (request, response) => {
    response.status(403).send("Accès non autorisé");
  },

  _404: (request, response) => {
    response.status(404).render("404");
  },

  _500: (error, request, response) => {
    // on utilise console.trace, histoire de savoir d'ou vient l'erreur
    // (fichier et numéro de ligne - très pratique !)
    console.trace(error);
    response.status(500).send(error.message);
  },
};

module.exports = errorController;