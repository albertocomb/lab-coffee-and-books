const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const placeSchema = new Schema({
  name: {
    type: String,
  },
  type: {
    type: String,
    enum: ['coffee shop', 'bookstore'],
  },
  location: {
    type: {
      type: String
    },
    coordinates: {
      type: [Number]
    }
  },
}, {
  timestamps: true,
});

placeSchema.index({ location: '2dsphere' });

const Place = mongoose.model('Place', placeSchema);

module.exports = Place;
