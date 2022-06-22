const express = require("express");

// on importe nos controllers
const mainController = require("./controllers/mainController");
const bookmarksController = require("./controllers/bookmarksController");


const router = express.Router();

// page d'accueil
router.get("/", mainController.homePage);

// page article
router.get("/article/:jewel", mainController.articlePage);

// page favoris
router.get("/favoris", bookmarksController.bookmarksPage);


// page ajouter un favoris
router.get("/favoris/add/:jewel", bookmarksController.addFavourite);

// page supprimer un favoris
router.get("/favoris/delete/:jewel", bookmarksController.deleteFavourite);


// on exporte le router
module.exports = router;