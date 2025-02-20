const express = require("express");
const { createItinerary, getItineraries,createCard,getCard } = require("../controllers/itineraryController");

const router = express.Router();

router.post("/add", createItinerary);
router.post("/addCard", createCard);
router.get("/", getItineraries);
router.get("/getCards", getCard);


module.exports = router;
