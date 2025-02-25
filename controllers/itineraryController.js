const Card = require("../models/Card");
const Itinerary = require("../models/Itinerary");
const cloudinary = require('../config/cloudinary');
const jwt = require("jsonwebtoken");
// ==========================login==============


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = { id: 1, email: "admin@example.com", role: "admin" };

        if (email !== user.email || password !== "admin123") {
            return res.status(401).json({ success: false, message: "Invalid credentials" });
        }

        // ✅ JWT Token Generate with Secret Key
        const token = jwt.sign(
            { id: user.id, email: user.email, role: user.role },
            process.env.JWT_SECRET, // ✅ Securely Fetching from .env
            { expiresIn: "24h" }
        );

        res.json({ success: true, token });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


exports.Getstatistic = async (req, res) => {
    try {
        const totalItineraries = await Itinerary.countDocuments(); // ✅ Total documents count
        const totalCard = await Card.countDocuments();
        res.status(200).json({ 
            success: true, 
            totalItineraries ,
            totalCard
        });

    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};
// Add Itinerary
exports.createItinerary = async (req, res) => {
    try {
        const tripData = req.body;
        
        // Itinerary save karna
        const newItinerary = new Itinerary(tripData);
        const savedItinerary = await newItinerary.save();
        
        // Card create karna
        const newCard = new Card({
            id: savedItinerary._id,
            state: savedItinerary.state,
            tag: savedItinerary.tag,
            typeoftrip: savedItinerary.typeoftrip,
            status: savedItinerary.status,
            country: savedItinerary.country,
            specialEvent: savedItinerary.specialEvent,
            title: savedItinerary.title,
            cardurl: savedItinerary.cardurl,
            duration: savedItinerary.duration,
            off: savedItinerary.off,
            price: savedItinerary.price
        });

        await newCard.save();

        // ✅ Sirf ek hi response send karna
        return res.status(201).json({
            message: "Itinerary and Card created successfully!",
            itinerary: savedItinerary,
            card: newCard
        });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

// ==========================================slider card===================================


exports.getCard = async (req, res) => {
    try {
        // Extract query parameters
        const { state, country, specialEvent,status,tag,typeoftrip} = req.query;
    
        // Build the filter object dynamically
        const filter = {};
        if (state) filter.state = state;
        if (country) filter.country = country;
        if (specialEvent) filter.specialEvent = specialEvent;
        if (status) filter.status = status;
        if (tag) filter.tag = tag;
        if (typeoftrip) filter.typeoftrip = typeoftrip;
    
        // Fetch cards based on the filter
        const cards = await Card.find(filter);
    
        // If no cards are found, return a 404
        if (cards.length === 0) {
          return res.status(404).json({ message: 'No cards found matching the criteria' });
        }
    
        // Return the filtered cards
        res.status(200).json(cards);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};


// Get All Itineraries
exports.getItineraries = async (req, res) => {
    try {
        const itinerary = await Itinerary.findById(req.params.id);
        if (!itinerary) {
          return res.status(404).json({ message: 'Itinerary not found' });
        }
        res.status(200).json(itinerary);
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
};

// ====================get imgs================

  
// ===========================AddRiveiw=======================


// globle :- https://traveltechbackend.vercel.app/api/itineraries