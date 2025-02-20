const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema({
  id:Number,
  title: String,
  State:String,
  imgurl: [{
    imgurl1: String,
    imgurl2: String,
    imgurl3: String,
    imgurl4: String,
  }],
  brief: String,
  duration: String,
  note: String,
  off: String,
  Photos: String,
  Quadprice: Number,
  Tripleprice: Number,
  Doubleprice: Number,
  Batches: [{
    id: Number,
    date: String,
    Extraprice: Number,
  }],
  Picuppoint: [{
    location: String,
    Extraprice: Number,
    Time: String,
  }],
  Droppoint: [{
    location: String,
    Extraprice: Number,
    Time: String,
  }],
  it: [{
    Heading: String,
    Schedule: String,
  }],
  inclusion: [{
    name: String,
    icon: String,
    inc: String,
  }],
  exclusion: [{
    name: String,
    icon: String,
    inc: String,
  }],
  thingstotake: [{
    name: String,
    icon: String,
    inc: String,
  }],
  gentem: String,
  Booking: [{
    key: String,
    description: String,
  }],
  Cancellation: [{
    key: String,
    description: String,
  }],
  FAQ: [{
    question: String,
    answer: String,
  }],
});


const CardSchema = new mongoose.Schema({
  title: String,
  State:String,
  imgurl: String,
  duration: String,
  note: String,
  off: String,
  price: Number,
  Picuppoint: String,
  Droppoint: String,  
});



const Itinerary = mongoose.model("Itinerary", ItinerarySchema);

const Card = mongoose.model("Card", CardSchema);
module.exports = Itinerary;
module.exports = Card;
