const mongoose = require('mongoose');
const Process = require('../models/process.model');

// handling GET for /stats
exports.getStats = (req, res) => {
  Process.aggregate(
    [
      {
        $group: {
          _id: '$method',
          count: { $sum: 1 },
          avgResponse: { $avg: '$duration' },
        },
      },
    ],
    function (err, data) {
      if (err) {
        return res.status(400).json({
          err: 'NOT able to process your request . Try again!!!',
        });
      } else {
        return res.status(200).json(data);
      }
    }
  );
};

// handling GET for /stats/:from(ISODate)/:to(ISODate)
exports.getSpecifiedStats = (req, res) => {
  let from = req.params.from;
  let to = req.params.to;
  Process.aggregate(
    [
      {
        $match: {
          date: {
            $gte: new Date(from),
            $lt: new Date(to),
          },
        },
      },

      {
        $group: {
          _id: '$method',
          count: { $sum: 1 },
          avgResponse: { $avg: '$duration' },
        },
      },
    ],
    function (err, data) {
      if (err) {
        return res.status(400).json({
          err: 'NOT able to process your request . Try again!!!',
        });
      } else {
        return res.status(200).json(data);
      }
    }
  );
};
