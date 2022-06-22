const datamapper = require("../datamapper/datamapper");
const errorController = require("../controllers/errorController");


const bookmarksController = {

  // méthode pour afficher les favoris
  bookmarksPage: async (request, response) => {
    if (!request.session.favoris) {
      response.render("favoris");
    } else {
      const newUserFavourites = request.session.favoris.map(n =>
        n.replace(" ", "")
      );
      let jewels = [];

      for (n of newUserFavourites) {
        try {
          let jewel = await datamapper.getOneJewel(n);
          jewels.push(jewel);
        } catch (error) {
          errorController._500(error, request, response);
        }
      }
      response.render("favoris", { jewels });
    }
  },

  // méthode pour ajouter un favoris
  addFavourite: (request, response) => {
    if (!request.session.favoris) {
      request.session.favoris = [];
    }
    let newFavourite = request.session.favoris.find(favoris => favoris === request.params.jewel);
    if (!newFavourite) {
      request.session.favoris.push(request.params.jewel);
    }
    response.redirect("/favoris");
  },

  deleteFavourite: async (request, response) => {
    if (!request.session.favoris) {
      response.redirect("/accueil");
    } else {
      const jewelToRemove = request.params.jewel;
      request.session.favoris = request.session.favoris.filter(favoris => favoris != jewelToRemove);
      response.redirect("/favoris");
    }
  },

};

module.exports = bookmarksController;
