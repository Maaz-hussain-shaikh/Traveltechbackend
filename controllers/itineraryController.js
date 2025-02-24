const Card = require("../models/Itinerary");
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
            { expiresIn: "1h" }
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

// ====================get imgs================
exports.uploadImage = async (req, res) => {
    try {

      if (!req.file) {
        return res.status(400).json({ success: false, message: "No file uploaded" });
      }
      const folderName = req.body.folderName || "AdminPanelUploads";
      // ✅ Upload File to Cloudinary
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: folderName, // ✅ Optional Folder Name
        use_filename: true,
        unique_filename: false,
      });
  
     
  
      // ✅ Delete file from local storage after upload
      const fs = require("fs");
      fs.unlinkSync(req.file.path);
  
      res.json({
        Foldername:folderName,
        success: true,
        imageUrl: result.secure_url,
      });
  
    } catch (error) {
      console.error("Cloudinary Upload Error:", error);
      res.status(500).json({ success: false, message: "Upload Failed", error: error.message });
    }
  };
  
// ===========================AddRiveiw=======================


// globle :- https://traveltechbackend.vercel.app/api/itineraries