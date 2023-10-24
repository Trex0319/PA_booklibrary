const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the review schema according to the following requirements:
    - `book`: (ObjectId, ref: 'Book', required)
    - `reviewerName`: (String, required)
    - `rating`: (Number, min: 1, max: 5, required)
    - `comment`: (String)
*/

const reviewSchema = new Schema({
  book: {
    type: Schema.Types.ObjectId,
    ref: "Book",
    required: true,
  },
  reviewerName: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  comment: String,
});

const Review = model("Review", reviewSchema);
module.exports = Review;
