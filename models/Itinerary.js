const mongoose = require("mongoose");

const ItinerarySchema = new mongoose.Schema({
    price: {
      type: Number,
      required: [true, "Price is required."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
      index: true,
    },
    status: {
      type: String,
      required: [true, "Status is required."],
      index: true,
    },
    country: {
      type: String,
      required: [true, "Country is required."],
      index: true,
    },
    specialEvent: {
      type: String,
      index: true,
    },
    tag: {
      type: String,
      index: true,
    },
    typeoftrip: {
      type: String,
      required: [true, "Type of trip is required."],
      index: true,
    },
    title: { type: String },
    
    imgurl_1: {
      type: String,
      required: [true, "Image 1 URL is required."],
    },
    imgurl_2: {
      type: String,
      required: [true, "Image 2 URL is required."],
    },
    imgurl_3: {
      type: String,
      required: [true, "Image 3 URL is required."],
    },
    imgurl_4: {
      type: String,
      required: [true, "Image 4 URL is required."],
    },
    imgurl_5: {
      type: String,
      required: [true, "Image 5 URL is required."],
    },
    brief: { type: String },
    duration: { type: String },
    note: { type: String },
    off: { type: String },
    Quadprice: { type: Number },
    Tripleprice: { type: Number },
    Doubleprice: { type: Number },
    Batches: [
      {
        id: { type: Number },
        date: { type: String },
        Extraprice: { type: Number },
      },
    ],
    Picuppoint: [
      {
        location: { type: String },
        Extraprice: { type: Number },
        Time: { type: String },
      },
    ],
    Droppoint: [
      {
        location: { type: String },
        Extraprice: { type: Number },
        Time: { type: String },
      },
    ],
    it: [
      {
        Heading: { type: String ,required: [true, "Itinerary is required."]},
        Schedule: { type: String , required: [true, "Itinerary is required."]},
        
      },
    ],
    inclusion: [
      {
        name: { type: String },
        icon: { type: String },
        inc: { type: String },
      },
    ],
    exclusion: [
      {
        name: { type: String },
        icon: { type: String },
        inc: { type: String },
      },
    ],
    thingstotake: [
      {
        name: { type: String },
        icon: { type: String },
        inc: { type: String },
      },
    ],
    gentem: { type: String },
    Booking: [
      {
        Heading: { type: String , required: [true, "Cancellation & Booking policy is required."], },
        Terms: { type: String , required: [true, "Cancellation & Booking  policy is required."]},
        
      }
    ],
    
    FAQ: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
  });





const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;

