const express = require("express");
const { createItinerary, getItineraries,createCard,getCard, login,Getstatistic} = require("../controllers/itineraryController");
const upload = require("../config/multer");
const authtoken=require("../config/authtoken")

const router = express.Router();
router.post("/login", login);
router.post("/Getstatistic", Getstatistic);
router.post("/add",authtoken, createItinerary);
// router.post("/addimgs",authtoken,upload.single("image"),uploadImage);
router.get("/Information/:id",authtoken, getItineraries);
router.get("/getCards",authtoken, getCard);


module.exports = router;
