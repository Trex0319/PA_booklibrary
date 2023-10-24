const mongoose = require("mongoose");
const { Schema, model } = mongoose;

/*
    instruction: setup the author schema according to the following requirements:
    - name: (String, required)
    - biography: (String)
    - dob: (Date) - Date of Birth
*/

const authorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  biography: String,
  dob: Date,
});

const Author = model("Author", authorSchema);
module.exports = Author;
