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
      required: [true, "Special event is required."],
      index: true,
    },
    tag: {
      type: String,
      required: [true, "Tag is required."],
      index: true,
    },
    typeoftrip: {
      type: String,
      required: [true, "Type of trip is required."],
      index: true,
    },
    title: { type: String },
    cardurl: { type: String },
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
        Heading: { type: String },
        Schedule: { type: String },
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
    Booking: {
      type: String,
      required: [true, "Booking details are required."],
    },
    Cancellation: {
      type: String,
      required: [true, "Cancellation policy is required."],
    },
    FAQ: [
      {
        question: { type: String },
        answer: { type: String },
      },
    ],
  });





const Itinerary = mongoose.model("Itinerary", ItinerarySchema);
module.exports = Itinerary;

