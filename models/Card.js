const mongoose = require("mongoose");
const CardSchema = new mongoose.Schema({

    id: { type: String, required: true },
    title: { type: String, required: true },
    state: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    status: {
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
    cardurl: { type: String },
    duration: { type: String },
    off: { type: String },
    price: { type: Number, required: true }
  });

  const Card = mongoose.model("Card", CardSchema);
  module.exports = Card;