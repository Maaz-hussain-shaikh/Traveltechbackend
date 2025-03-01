const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({

    id: { type: String, required: true },
    title: { type: String, required: true },
    state: {
      type: String,
      index: true,
      required: true
    },
    country: {
      type: String,
      index: true,
      required: true
    },
    status: {
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
    },imgurl_1: {
      type: String,
      required: [true, "Image 1 URL is required."],
    },
    imgurl_2: {
      type: String,
      required: [true, "Image 2 URL is required for SEO."],
    },
    duration: { type: String },
    off: { type: String },
    price: { type: Number, required: true }
  });

  const Card = mongoose.model("Card", CardSchema);
  module.exports = Card;