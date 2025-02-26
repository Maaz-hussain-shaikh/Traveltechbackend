const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema({
  
  price: {
    type: Number,
    required: true
  },
  state: {
    type: String,
    required: true,
    index: true,
    
  },
  status: {
    type: String,
    index: true,
    required: true
  },
  country: {
    type: String,
    index: true,
    required: true
  },
  specialEvent: {
    type: String,
    index: true,
    required: true
  },
  tag: {
    type: String,
    index: true,
    required: true
  },
  typeoftrip: {
    type: String,
    index: true,
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
  Booking: {
    type: String,
 
    required: true
  },
  Cancellation:{
    type: String,
   
    required: true
  },
  FAQ: [
    {
      question: { type: String },
      answer: { type: String }
    }
  ]
});





const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;

