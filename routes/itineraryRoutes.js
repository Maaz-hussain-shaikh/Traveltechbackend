const express = require("express");
const { createItinerary, getItineraries,createCard,getCard, uploadImage, login,Getstatistic} = require("../controllers/itineraryController");
const upload = require("../config/multer");
const authtoken=require("../config/authtoken")

const router = express.Router();
router.post("/login", login);
router.post("/Getstatistic", Getstatistic);
router.post("/add",authtoken, createItinerary);
router.post("/addCard",authtoken, createCard);
router.post("/addimgs",authtoken,upload.single("image"),uploadImage);
router.get("/",authtoken, getItineraries);
router.get("/getCards",authtoken, getCard);


module.exports = router;
