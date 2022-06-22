const datamapper = require("../datamapper/datamapper");
const errorController = require("../controllers/errorController");

const mainController = {

  // méthode pour la page d'accueil
  homePage: async (request, response) => {
    try {
      const jewels = await datamapper.getAllJewels();
      response.render("accueil", { jewels });
    } catch (error) {
      errorController._500(error, request, response);
    }
  },

  // méthode pour la page article
  articlePage: async (request, response) => {

    let userJewel = request.params.jewel;

    try {
      const jewel = await datamapper.getOneJewel(userJewel);

      if (jewel) {
        const reviews = await datamapper.getReviews(jewel.id);
        response.render("article", { jewel, reviews });
      } else {
        errorController._404(request, response);
      }
    } catch (error) {
      errorController._500(error, request, response);
    }

  },

};


module.exports = mainController;
