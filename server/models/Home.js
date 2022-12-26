const { Schema, model } = require('mongoose');

const homeSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    area: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    },
    price: {
        type: Number,
        required: true
    },
    bedroomsandBath: {
        type: Number,
        required: true
  },
    stories: {
    type: String,
    required: true
  },
    styles: {
    type: String,
    required: true
  },
  } 
);

const Home = model('Home', homeSchema);

module.exports = Home;
