const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema({
  
  price: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  specialEvent: {
    type: String,
    required: true
  },
  tag: {
    type: String,
    required: true
  },
  typeoftrip: {
    type: String,
    required: true
  },
  title: { type: String },
  cardurl: { type: String },
  imgurl: [{ type: String }],  // Array of image URLs
  brief: { type: String },
  duration: { type: String },
  note: { type: String },
  off: { type: String },
  Photos: { type: String },
  Quadprice: { type: Number },
  Tripleprice: { type: Number },
  Doubleprice: { type: Number },
  Batches: [
    {
      id: { type: Number },
      date: { type: String },
      Extraprice: { type: Number }
    }
  ],
  Picuppoint: [
    {
      location: { type: String },
      Extraprice: { type: Number },
      Time: { type: String }
    }
  ],
  Droppoint: [
    {
      location: { type: String },
      Extraprice: { type: Number },
      Time: { type: String }
    }
  ],
  it: [
    {
      Heading: { type: String },
      Schedule: { type: String }
    }
  ],
  inclusion: [
    {
      name: { type: String },
      icon: { type: String },
      inc: { type: String }
    }
  ],
  exclusion: [
    {
      name: { type: String },
      icon: { type: String },
      inc: { type: String }
    }
  ],
  thingstotake: [
    {
      name: { type: String },
      icon: { type: String },
      inc: { type: String }
    }
  ],
  gentem: { type: String },
  Booking: [
    {
      key: { type: String },
      description: { type: String }
    }
  ],
  Cancellation: [
    {
      key: { type: String },
      description: { type: String }
    }
  ],
  FAQ: [
    {
      question: { type: String },
      answer: { type: String }
    }
  ]
});





const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;

