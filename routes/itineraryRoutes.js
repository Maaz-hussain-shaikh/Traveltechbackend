const express = require("express");
const multer = require('multer');
const {deleteimgs,uploadImage} = require("../controllers/imageController")
const { createItinerary, getItineraries,getCard, login,Getstatistic,deleteItinerary} = require("../controllers/itineraryController");

const authtoken=require("../config/authtoken")
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();

// =========all POST req====
router.post("/login", login);
router.post("/Getstatistic", Getstatistic);
router.post("/add",authtoken, createItinerary);
router.post("/addimgs",authtoken,upload.single("image"),uploadImage);

// =============all get req========
router.get("/Information/:id",authtoken, getItineraries);
router.get("/getCards",authtoken, getCard);

// =======all delete request ===========
router.delete("/deleteimgs",authtoken,deleteimgs);
router.delete("/deleteItinerary/:id",authtoken,deleteItinerary);

module.exports = router;
