const Card = require("../models/Card");
const Itinerary = require("../models/Itinerary");
const jwt = require("jsonwebtoken");


// ==========================login==============


exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = { id: 1, email: "Masteradmin", role: "admin" };

        if (email !== user.email || password !== "Maaz123") {
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
        const totalCard = await Card.countDocuments();// ✅ Total documents count
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
            imgurl_1: savedItinerary.imgurl_1,
            imgurl_2: savedItinerary.imgurl_2,
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
        const { state, country, specialEvent, status, tag, typeoftrip, page = 1, limit = 10 } = req.query;
    
        // Build the filter object dynamically
        const filter = {};
        if (state) filter.state = state;
        if (country) filter.country = country;
        if (specialEvent) filter.specialEvent = specialEvent;
        if (status) filter.status = status;
        if (tag) filter.tag = tag;
        if (typeoftrip) filter.typeoftrip = typeoftrip;
    
        // Calculate pagination values
       
    
        // Fetch cards from the database
        console.time('Database Query'); // Measure query time
        const cards = await Card.find(filter, {
            id: 1,
            state: 1,
            tag: 1,
            typeoftrip: 1,
            status: 1,
            country: 1,
            specialEvent: 1,
            title: 1,
            imgurl_1: 1,
            imgurl_2: 1,
            duration: 1,
            off: 1,
            price: 1
        })
        console.timeEnd('Database Query'); // Log query time
    
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

// ====================delete itinerary================

exports.deleteItinerary = async (req, res) => {
    try {
      const itineraryId = req.params.id;
  
      // Find the itinerary
      const itinerary = await Itinerary.findById(itineraryId);
      if (!itinerary) {
        return res.status(404).json({ message: 'Itinerary not found' });
      }
  
      // Delete the associated card
      await Card.findOneAndDelete({ id: itineraryId });
  
      // Delete the itinerary
      await Itinerary.findByIdAndDelete(itineraryId);
  
      res.status(200).json({ message: 'Itinerary and associated card deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
// ===========================AddRiveiw=======================


// globle :- https://traveltechbackend.vercel.app/api/itineraries