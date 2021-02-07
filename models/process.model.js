var mongoose = require('mongoose');

var processSchema = new mongoose.Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    method: {
      type: String,
      required: true,
    },
    headers: {
      type: Object,
      required: true,
    },
    path: {
      type: String,
      required: true,
    },
    query: {
      type: Object,
    },
    body: {
      type: Object,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Process', processSchema);
