'use strict';

import mongoose from 'mongoose';

var PlaceSchema = new mongoose.Schema({
  name: String,
  street: String,
  number: Number,
  city: String,
  state: String,
  country: String,
  geo: {
    lat: Number,
    lon: Number
  }
});

var EventoSchema = new mongoose.Schema({
  name: String,
  description: String,
  date: Date,
  img: String, // URL
  place: PlaceSchema
});

export default mongoose.model('Evento', EventoSchema);
