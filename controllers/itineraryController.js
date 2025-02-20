
const Card = require("../models/Itinerary");
const Itinerary = require("../models/Itinerary");

// Add Itinerary
exports.createItinerary = async (req, res) => {
    try {
        const tripData = req.body;
        const newItinerary = new Itinerary(tripData);
        await newItinerary.save();
        res.status(201).json(newItinerary);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ==========================================slider card===================================
exports.createCard = async (req, res) => {
    try {
        const CardData = req.body;
        const newCard = new Card(CardData);
        await newCard.save();
        res.status(201).json(newCard);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getCard = async (req, res) => {
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


// Get All Itineraries
exports.getItineraries = async (req, res) => {
    try {
        const itineraries = await Itinerary.find();
        res.status(200).json(itineraries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// ===========================AddRiveiw=======================
